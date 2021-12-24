import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagesService } from '../services/messages.service';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
  public constructor(private messageService: MessagesService) {}
}
