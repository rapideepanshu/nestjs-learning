import { GetStudentFilter } from './dto/get-student-filter.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { CourseStatus } from './course-status.enum';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  async getStudents(@Query() filterDto: GetStudentFilter): Promise<Student[]> {
    return this.studentService.getStudents(filterDto);
  }

  @Post()
  createStudent(@Body() createTaskDto: CreateStudentDto): Promise<Student> {
    return this.studentService.createStudent(createTaskDto);
  }

  @Get('/:id')
  getStudentById(@Param('id') id: string): Promise<Student> {
    return this.studentService.getStudentById(id);
  }

  @Delete('/:id')
  deleteStudent(@Param('id') id: string): Promise<void> {
    return this.studentService.deleteStudent(id);
  }

  @Patch('/:id/course_status')
  updateStudent(
    @Param('id') id: string,
    @Body('course_status') status: CourseStatus,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, status);
  }
}
