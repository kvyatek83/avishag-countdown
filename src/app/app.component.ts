import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
})
export class AppComponent {
  loaded$ = this.counterService.counterStarted$;

  constructor(private counterService: CounterService) {
    setTimeout(() => {
      this.counterService.startCount();
    }, 5000)
  }
}
