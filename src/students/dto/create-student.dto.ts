import { IsNotEmpty } from 'class-validator';
export class CreateStudentDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  age: number;
}
