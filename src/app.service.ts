import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProdutos(): string {
    return 'Hello World!';
  }
}
