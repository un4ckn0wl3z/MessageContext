import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageContextService } from './guard/message-context.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,MessageContextService],
})
export class AppModule {}
