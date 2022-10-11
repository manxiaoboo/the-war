import { Controller, Get } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller()
export class OrganizationsController {

  constructor(private orgService: OrganizationsService) {
  }

  @Get('/organizations/organizations')
  getOrganizations() {
    return this.orgService.getOrganizations();
  }

}
