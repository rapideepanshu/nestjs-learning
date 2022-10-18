import { User } from './../auth/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CourseStatus } from './course-status.enum';
import { Exclude } from 'class-transformer';

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

  @ManyToOne((_type) => User, (user) => user.students, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
