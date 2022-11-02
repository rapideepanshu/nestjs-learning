import { NestMiddleware, Injectable } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class StudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
