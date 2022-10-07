import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CourseStatus } from '../course-status.enum';

export class GetStudentFilter {
  @IsOptional()
  @IsEnum(CourseStatus)
  status?: CourseStatus;

  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;
}
