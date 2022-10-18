import { User } from './../auth/user.entity';
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
  UseGuards,
} from '@nestjs/common';
import { CourseStatus } from './course-status.enum';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('students')
@UseGuards(AuthGuard())
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  async getStudents(
    @Query() filterDto: GetStudentFilter,
    @GetUser()
    user: User,
  ): Promise<Student[]> {
    return this.studentService.getStudents(filterDto, user);
  }

  @Post()
  createStudent(
    @Body() createStudentDto: CreateStudentDto,
    @GetUser()
    user: User,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentDto, user);
  }

  @Get('/:id')
  getStudentById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<Student> {
    return this.studentService.getStudentById(id, user);
  }

  @Delete('/:id')
  deleteStudent(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.studentService.deleteStudent(id, user);
  }

  @Patch('/:id/course_status')
  updateStudent(
    @Param('id') id: string,
    @Body('course_status') status: CourseStatus,
    @GetUser() user: User,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, status, user);
  }
}
