import { Module } from '@nestjs/common';
import { StoryScriptsController } from './story-scripts.controller';
import { StoryScriptsService } from './story-scripts.service';

@Module({
  imports: [],
  controllers: [
    StoryScriptsController
  ],
  providers: [
    StoryScriptsService
  ],
  exports: [
    StoryScriptsService
  ]
})
export class StoryScriptsModule {}
