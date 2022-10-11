import { Controller, Get } from '@nestjs/common';
import { StoryScriptsService } from './story-scripts.service';

@Controller()
export class StoryScriptsController {

  constructor(private scriptService: StoryScriptsService) {
  }

  @Get('/story/getStory')
  getStory() {
    const script = this.scriptService.getScript();
    return {
        name: script.name,
        description: script.description,
        time: script.time,
    };
  }

}
