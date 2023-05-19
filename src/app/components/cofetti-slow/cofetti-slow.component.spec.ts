import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofettiSlowComponent } from './cofetti-slow.component';

describe('CofettiSlowComponent', () => {
  let component: CofettiSlowComponent;
  let fixture: ComponentFixture<CofettiSlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofettiSlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofettiSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
