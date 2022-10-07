import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CourseStatus } from './course-status.enum';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  roll_no: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  course_status: CourseStatus;
}
