import { Injectable } from '@nestjs/common';
import { ActorsService } from '../actors/actors.service';
import { ActorRole } from '../enums/actor-role.enum';

@Injectable()
export class OrganizationsService {
    data: any = {
        organizations: []
    };

    constructor(private actorService: ActorsService) {

    }

    getAllOrganizations(): any[] {
        const results = [...this.data.organizations];
        results.forEach(org => {
            org.masterInstance = this.actorService.getActorById(org.master);
        })
        return results;
    }

    getOrganizations(): any[] {
        const results = [...this.data.organizations];
        results.forEach(org => {
            org.masterInstance = this.actorService.getActorById(org.master);
        })
        return results.filter(result => result.alive);
    }

    getOrganizationById(id: string): any {
        return this.getOrganizations().find(org => org.id == id);
    }

    createOrganization(organization: any) {
        this.data.organizations.push(organization);
    }

    setMaster(org, actor: any): void {
        org.master = actor.id;
        org.actorsCount ++;
        actor.role = ActorRole.势力主;
        actor.belongTo = org.id;
    }

    setMember(org, actor: any, role: ActorRole): void {
        org.actorsCount ++;
        actor.belongTo = org.id;
        actor.role = role;
    }

}
