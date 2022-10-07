import { Module } from '@nestjs/common';
import { StudentModule } from './students/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Podio123!',
      database: 'college management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
