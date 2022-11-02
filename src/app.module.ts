import { Module } from '@nestjs/common';
import { StudentModule } from './students/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';

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
    AuthModule,
    ScheduleModule.forRoot(),
  ],
  providers: [CronService],
})
export class AppModule {}
