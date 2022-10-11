import { Module } from '@nestjs/common';
import { RunnerController } from './runner.controller';
import { RunnerService } from './runner.service';
import { StoryScriptsModule } from '../story-scripts/story-scripts.module';
import { ActorsController } from '../actors/actors.controller';
import { ActorsService } from '../actors/actors.service';
import { OrganizationsController } from '../organizations/organizations.controller';
import { OrganizationsService } from '../organizations/organizations.service';
import { AreasController } from '../areas/areas.controller';
import { AreasService } from '../areas/areas.service';
import { EventsGateway } from '../events/events.gateway';
import { EventCreaterService } from '../events/events.creater';

@Module({
    imports: [
        StoryScriptsModule,
    ],
    controllers: [
        RunnerController,
        OrganizationsController,
        AreasController,
        ActorsController
    ],
    providers: [
        RunnerService,
        OrganizationsService,
        AreasService,
        ActorsService,
        EventsGateway,
        EventCreaterService,
    ],
})
export class RunnerModule { }
