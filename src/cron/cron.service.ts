import { Injectable } from '@nestjs/common';
import {
  Cron,
  CronExpression,
  Timeout,
  Interval,
  SchedulerRegistry,
} from '@nestjs/schedule';
import { CronJob } from 'cron';
@Injectable()
export class CronService {
  //   constructor(private scheduleRegistry: SchedulerRegistry) {
  //     this.addCronJob('test', '5');
  //   }
  //   addCronJob(name: string, seconds: string) {
  //     const job = new CronJob(`${seconds} * * * * *`, () => {
  //       console.log(`time (${seconds}) for job ${name} to run!`);
  //     });
  //     this.scheduleRegistry.addCronJob(name, job);
  //     job.start();
  //     console.log(`job ${name} added for each minute at ${seconds} seconds!`);
  //   }
  //   @Cron('*/10 * * * * *', {
  //     name: 'notifications',
  //   })
  //   triggerNotifications() {
  //     const job = this.scheduleRegistry.getCronJob('notifications');
  //     console.log(job.lastDate());
  //   }
  //   @Cron('*/10 * * * * *')
  //   runEvery10Seconds() {
  //     console.log('Every 10 seconds');
  //   }
  //   @Cron(CronExpression.EVERY_MINUTE)
  //   runEveryMinute() {
  //     console.log('Every minute');
  //   }
  //   @Timeout(15000)
  //   onceAfter15Seconds() {
  //     console.log('Called once after 15 seconds');
  //   }
  //   @Interval('notifications', 2500)
  //   handleInterval() {
  //     console.log('Interval');
  //   }
}

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | months
// | | | day of month
// | | hours
// | minutes
// seconds (optional)
