import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPetHomeComponent } from './smart-pet-home.component';

describe('SmartPetHomeComponent', () => {
  let component: SmartPetHomeComponent;
  let fixture: ComponentFixture<SmartPetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
