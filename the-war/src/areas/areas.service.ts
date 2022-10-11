import { Injectable } from '@nestjs/common';
import { OrganizationsService } from '../organizations/organizations.service';

@Injectable()
export class AreasService {
    data: any = {
        areas: [],
        cities: []
    };

    constructor(private orgService: OrganizationsService) {

    }

    getAreas(): any {
        const cities = [...this.data.cities];
        cities.forEach(city => {
            city.masterInstance = this.orgService.getOrganizationById(city.master);
        })
        return { areas: this.data.areas, cities: cities };
    }

    setAreas(areas: any) {
        this.data.areas = areas;
        this.data.areas.forEach((area: any) => {
            this.getCities(area);
        })
    }

    setAreaMaster(city: any, organization: any) {
        city.master = organization.id;
        organization.cityCount++;
    }

    getAreaById(id: string): any {
        return this.data.cities.find(area => area.id == id);
    }

    getCities(area: any) {
        if (area.id) this.data.cities.push(area);
        if (area.children) {
            area.children.forEach((c: any) => {
                this.getCities(c);
            });
        }
    }

    /**
     * 征兵 - 按照增速
     * @param city 
     */
    generatorArmy(city) {
        city.army += city.armySpeed;
    }

    attachCity(from: any, target: any) {
        const randomBufferRate = this.getRamdom(0, 20);
        from.army -= target.army + (target.army * (randomBufferRate / 100));
        from.army -= Math.floor(from.army);
        target.army = this.getRamdom(5000, 10000);
        this.setAreaMaster(target, from.masterInstance);
        target.masterInstance.cityCount--;
    }

    private getRamdom(min, max): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
