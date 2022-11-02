import { StudentRepository } from './student.repository';
import { Student } from './student.entity';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { AuthModule } from 'src/auth/auth.module';
import { StudentMiddleware } from './student.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), AuthModule],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(StudentMiddleware)
      .exclude({ path: 'students', method: RequestMethod.POST });
  }
}
