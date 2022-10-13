import { GetStudentFilter } from './dto/get-student-filter.dto';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentRepository extends Repository<Student> {
  constructor(private dataSource: DataSource) {
    super(Student, dataSource.createEntityManager());
  }

  async getStudents(getStudentFilterDto: GetStudentFilter): Promise<Student[]> {
    const { first_name, last_name, status } = getStudentFilterDto;
    const query = this.createQueryBuilder('student');

    if (status) {
      query.andWhere('student.course_status=:status', { status });
    }

    if (first_name) {
      query.andWhere('LOWER(student.first_name) LIKE LOWER(:first_name)', {
        first_name: `%${first_name}%`,
      });
    }

    if (last_name) {
      query.andWhere('LOWER(student.last_name) LIKE LOWER(:last_name)', {
        last_name: `%${last_name}%`,
      });
    }
    const students = await query.getMany();
    return students;
  }
}
