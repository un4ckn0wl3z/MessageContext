import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MessageContextService } from './message-context.service';

@Injectable()
export class CreateMessageContextGuard implements CanActivate {
  constructor(
    private readonly messageContextService: MessageContextService
  ){}
  canActivate(context: ExecutionContext): boolean {
    if(context.getType() == 'rpc'){
      const data = context.switchToRpc().getData();
      this.messageContextService.init(data)
      return true
  }

}
}