import { Injectable } from '@nestjs/common';
import { ActorRole } from '../enums/actor-role.enum';

@Injectable()
export class ActorsService {
    data: any = {
        actors: []
    };

    getActors(): any[] {
        return this.data.actors;
    }

    createActor(actor: any) {
        this.data.actors.push(actor);
    }

    killActor(murderer: any, target: any) {
        murderer.killCount++;
        target.alive = false;
    }

    setActorRole(actor: any, role: ActorRole) {
        actor.role = role;
    }

    getActorById(id: string): any {
        return this.getActors().find(actor => actor.id == id);
    }
}
