import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPetStartComponent } from './smart-pet-start.component';

describe('SmartPetStartComponent', () => {
  let component: SmartPetStartComponent;
  let fixture: ComponentFixture<SmartPetStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPetStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPetStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
