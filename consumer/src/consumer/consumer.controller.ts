import { Controller, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';

@Controller('consumer')
export class ConsumerController implements OnModuleInit {
  constructor(private consumerService: ConsumerService) {}

  async onModuleInit() {
    this.consumerService.consume(
      'save-info-group',
      { topics: ['save-info'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            source: 'save-info',
            message: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
