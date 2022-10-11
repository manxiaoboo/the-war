import { Injectable } from '@nestjs/common';
import * as Story from './story/bj.json';
import * as Actors from './story/bj-actors.json';
import * as Organizations from './story/bj.organizations.json';
import * as Areas from './story/bj-areas.json';

@Injectable()
export class StoryScriptsService {

    loadScript(): void {
        console.info(`Load Script: <${ Story.name }>`);
    }

    getScript(): any {
        return Story;
    }

    getActors(): any {
        return Actors;
    }

    getOrganizations(): any {
        return Organizations;
    }

    getAreas(): any {
        return Areas;
    }
}
