import { Injectable } from '@nestjs/common';
import { StoryScriptsService } from '../story-scripts/story-scripts.service';
import { ActorsService } from '../actors/actors.service';
import { OrganizationsService } from '../organizations/organizations.service';
import { AreasService } from '../areas/areas.service';
import { EventCreaterService } from '../events/events.creater';
import { EventsGateway } from '../events/events.gateway';
import { IEventData } from '../events/events.model';
import { EventName } from '../enums/events.enum';

import {
    generator
} from './utils/generator';


const enum RunnerState {
    Loading = '初始化赛季中...',
    Running = '赛季纷争中...',
    Ending = '赛季结算'
}

@Injectable()
export class RunnerService {
    timmer: any;
    story: any;
    data: any = {
        status: RunnerState.Loading,
        ending: null,
        day: 0,
        year: 0,
        month: 0,
    };

    constructor(
        private scriptService: StoryScriptsService,
        private actorService: ActorsService,
        private orgService: OrganizationsService,
        private areaService: AreasService,
        private eventCreater: EventCreaterService,
        private gateway: EventsGateway
    ) {

    }

    preLoadResource(): void {
        this.initStory();
        this.initAreas();
        this.initOrganizations();
        this.initActors();
        this.generateRelationship();
        this.data.status = RunnerState.Running;
    }

    initStory(): void {
        this.scriptService.loadScript();
        this.story = this.scriptService.getScript();
    }

    initAreas(): void {
        const areas = this.scriptService.getAreas();
        this.areaService.setAreas(areas);
    }

    initOrganizations(): void {
        const organizations = this.scriptService.getOrganizations();
        organizations.forEach(o => {
            this.orgService.createOrganization(o);
        });
    }

    initActors(): void {
        const actors = this.scriptService.getActors();
        actors.forEach(a => {
            this.actorService.createActor(a);
        });
    }

    generateRelationship(): void {
        const organizations = this.scriptService.getOrganizations();
        const actors = this.scriptService.getActors();
        const cities = this.areaService.getAreas().cities;
        generator(organizations, actors, cities, this.orgService, this.areaService, this.actorService);
    }

    startMainTimmer(): void {
        this.data.year = this.story.time.metaYear;
        this.timmer = setInterval(() => {
            this.data.day++;
            // console.info(`Day ${this.data.day}. Year ${this.data.year}`);
            if (this.data.day % 365 == 0) {
                this.yearChanged();
            }
            if (this.data.day % 30 == 0) {
                this.monthChanged();
            }
            // this.mockKillEnding();
        }, this.story.time.transferOneDayMS);
    }

    mockKillEnding() {
        if (this.data.day > 10) {
            const boss = this.actorService.getActors().find(a => a.id == 'boss');
            this.actorService.killActor(boss, boss);
            this.determineEnding();
        }
    }

    monthChanged(): void {
        this.data.month ++;
        const eventdata: IEventData = {
            name: EventName.OneMonthPassed,
            data: {
                message: '时间又过去了一个月...'
            }
        };
        this.gateway.emitMessage(eventdata);
        this.eventCreater.startMonthMeeting();
    }

    yearChanged(): void {
        this.data.year++;
        this.determineEnding();
    }

    determineEnding(): void {

        const checkCondition = (es): any => {
            let endingFlag: boolean = false;
            let ending: any;
            for (let i = 0; i < es.condition.length; i++) {
                let metaYearFlag: number = -1;
                let diedFlag: number = -1;
                if (es.condition[i].metaYear) {
                    if (this.data.year > es.condition[i].metaYear) {
                        metaYearFlag = 1;
                        ending = es.condition[i];
                    } else {
                        metaYearFlag = 0;
                    }
                }

                if (es.condition[i].died) {
                    const actors = this.actorService.getActors();
                    const targetActor = actors.find(a => a.id == es.condition[i].died);
                    if (targetActor && !targetActor.alive) {
                        diedFlag = 1;
                        ending = es.condition[i];
                    } else {
                        diedFlag = 0;
                    }
                }

                if (metaYearFlag == 1 || diedFlag == 1) {
                    endingFlag = true;
                    break;
                }
            }
            return { endingFlag, ending };
        }


        const endings = this.story.ending;
        for (let i = 0; i < endings.length; i++) {
            const { endingFlag, ending } = checkCondition(endings[i]);
            if (endingFlag) {
                this.data.ending = ending;
                this.endStory();
                break;
            }
        }
    }

    endStory() {
        clearInterval(this.timmer);
        this.timmer = undefined;
        this.data.status = RunnerState.Ending;
    }
}
