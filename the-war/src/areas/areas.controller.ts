import { Controller, Get } from '@nestjs/common';
import { AreasService } from './areas.service';

@Controller()
export class AreasController {

  constructor(private areaService: AreasService) {
  }

  @Get('/areas/areas')
  getAreas() {
    return this.areaService.getAreas();
  }

}
