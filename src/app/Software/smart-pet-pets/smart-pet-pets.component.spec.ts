import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPetPetsComponent } from './smart-pet-pets.component';

describe('SmartPetPetsComponent', () => {
  let component: SmartPetPetsComponent;
  let fixture: ComponentFixture<SmartPetPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPetPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPetPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
