import { Injectable } from '@nestjs/common';
import { MessageContextDto } from './message-context.dto';


@Injectable()
export class MessageContextService {

    private messageContext: MessageContextDto;

    constructor (){}

    init(data: MessageContextDto){
        this.messageContext = data
    }

    updateValueData(data: any) {
        this.messageContext.value.data = data
    }

    getContextMessage(data: any): MessageContextDto {
        this.messageContext.value.data = data
        return this.messageContext
    }


}