import { StudentRepository } from './student.repository';
import { Student } from './student.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
