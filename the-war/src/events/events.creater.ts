import { Injectable } from '@nestjs/common';
import { getDistance } from '../runner/utils/utils';
import { OrganizationsService } from '../organizations/organizations.service';
import { AreasService } from '../areas/areas.service';
import { EventsGateway } from './events.gateway';
import { EventName } from '../enums/events.enum';
import { IEventData } from '../events/events.model';

@Injectable()
export class EventCreaterService {
    constructor(
        private gateway: EventsGateway,
        private orgService: OrganizationsService,
        private areaService: AreasService
    ) {
    }

    // 开始月度会议
    startMonthMeeting() {
        const orgs = this.orgService.getOrganizations();
        orgs.forEach(org => this.hostMeeting(org));
    }

    // 各势力举行会议
    private hostMeeting(org) {
        const areas = this.areaService.getAreas();
        const cities = areas.cities;
        const orgCities = cities.filter(city => city.master == org.id);
        const others = cities.filter(city => city.master != org.id);
        orgCities.forEach(city => this.dispatchTaskToCity(city, others));
    }

    // 为城市分配任务
    private dispatchTaskToCity(city, others) {
        this.buildTask(city);
        this.warTask(city, others);
    }

    // 内政任务
    private buildTask(city) {
        this.areaService.generatorArmy(city);
    }

    // 军事任务  -- 傻瓜式攻击临近弱小城市
    private warTask(city, others) {
        let nearHostileCity = null;
        let minDistance = -1;
        others.forEach(other => {
            if (minDistance == -1) {
                nearHostileCity = other;
                minDistance = getDistance(city.position, other.position);
            } else {
                if (getDistance(city.position, other.position) < minDistance) {
                    nearHostileCity = other;
                    minDistance = getDistance(city.position, other.position);
                }
            }
        });
        if (city.army >= nearHostileCity.army) {
            const eventdata: IEventData = {
                name: EventName.AttachCity,
                data: {
                    message: `[#${city.masterInstance.name} - ${city.name}] 对 [#${nearHostileCity.masterInstance.name} - ${nearHostileCity.name}] 发起了攻击！`
                }
            };
            this.areaService.attachCity(city, nearHostileCity);
            this.gateway.emitMessage(eventdata);
        }
    }
}
