import { Component } from '@angular/core';
import { Subscription, interval, tap } from 'rxjs';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  
  weAreMarried = false

  public dateNow = new Date();
  public dDay = new Date('Oct 10 2023 18:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: number | undefined;
  public secondsToDday: number | undefined;
  public minutesToDday: number | undefined;
  public hoursToDday: number | undefined;
  public daysToDday: number | undefined;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.getTimeDifference();
    this.counterService.counterStarted$.pipe(tap(() => console.log('aaa'))).subscribe(() => this.getTimeDifference())
  }

  private getTimeDifference(): void {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    if (this.timeDifference <= 0) {
      this.weAreMarried = true;
      this.counterService.stopCount();
    }
    this.allocateTimeUnits(this.timeDifference);
    
  }

  private allocateTimeUnits(timeDifference: number): void {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }
}
