import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSmCardComponent } from './date-sm-card.component';

describe('DateSmCardComponent', () => {
  let component: DateSmCardComponent;
  let fixture: ComponentFixture<DateSmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSmCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
