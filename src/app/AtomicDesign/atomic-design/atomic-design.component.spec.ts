import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicDesignComponent } from './atomic-design.component';

describe('AtomicDesignComponent', () => {
  let component: AtomicDesignComponent;
  let fixture: ComponentFixture<AtomicDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomicDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
