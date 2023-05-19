import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, interval, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counterStarted$ = new Subject<boolean>;
  private count: Subscription | undefined;
  
  get counterStarted$(): Observable<boolean> {
    return this._counterStarted$.asObservable();
  }

  set counterStarted(val: boolean) {
    this._counterStarted$.next(val);
  }

  startCount(): void {
     this.count = interval(1000).pipe(tap(() => this.counterStarted = true)).subscribe();
  }

  stopCount(): void {
    this.count?.unsubscribe();
  }
}
