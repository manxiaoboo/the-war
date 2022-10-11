import { Controller, Get } from '@nestjs/common';
import { RunnerService } from './runner.service';

@Controller()
export class RunnerController {

  constructor(private runnerService: RunnerService) {
    this.initRunner();
  }

  initRunner() {
    this.runnerService.preLoadResource();
    this.runnerService.startMainTimmer();
  }

  @Get('/runner/data')
  currentDay(): number {
    return this.runnerService.data;
  }

}
