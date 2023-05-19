import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofettiFastComponent } from './cofetti-fast.component';

describe('CofettiFastComponent', () => {
  let component: CofettiFastComponent;
  let fixture: ComponentFixture<CofettiFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofettiFastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofettiFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
