import { Controller, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private producerService: ProducerService) {}

  @Post()
  async sendMessage() {
    const payload = {
      topic: 'save-info',
      messages: [{ value: 'This is the info from producer' }],
    };
    await this.producerService.produce(payload);
  }
}
