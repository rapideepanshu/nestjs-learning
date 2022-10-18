import { User } from './../auth/user.entity';
import { StudentRepository } from './student.repository';
import { GetStudentFilter } from './dto/get-student-filter.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseStatus } from './course-status.enum';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  async getStudents(
    getTaskFilterDto: GetStudentFilter,
    user: User,
  ): Promise<Student[]> {
    return this.studentRepository.getStudents(getTaskFilterDto, user);
  }

  async createStudent(
    createStudentDto: CreateStudentDto,
    user: User,
  ): Promise<Student> {
    const { first_name, last_name, age } = createStudentDto;
    const student = await this.studentRepository.create({
      first_name,
      last_name,
      age,
      course_status: CourseStatus.REGULAR,
      user,
    });

    await this.studentRepository.save(student);
    return student;
  }

  async getStudentById(id: string, user: User): Promise<Student> {
    const found = await this.studentRepository.findOne({
      where: { roll_no: id, user },
    });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async deleteStudent(id: string, user: User): Promise<void> {
    const result = await this.studentRepository.delete({ roll_no: id, user });
    if (result.affected === 0) {
      throw new NotFoundException(`Student with ${id} roll no is not deleted.`);
    }
  }
  async updateStudent(
    id: string,
    status: CourseStatus,
    user,
  ): Promise<Student> {
    const student = await this.getStudentById(id, user);
    student.course_status = status;
    await this.studentRepository.save(student);
    return student;
  }
}
