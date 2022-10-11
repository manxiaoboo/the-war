import { Controller, Get } from '@nestjs/common';
import { ActorsService } from './actors.service';

@Controller()
export class ActorsController {
    name = 'test';
    

    constructor(private actorService: ActorsService) {
    }

    @Get('/actors/actors')
    getActors() {
        return this.actorService.getActors();
    }

}
