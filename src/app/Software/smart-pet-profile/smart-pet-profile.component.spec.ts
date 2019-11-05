import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPetProfileComponent } from './smart-pet-profile.component';

describe('SmartPetProfileComponent', () => {
  let component: SmartPetProfileComponent;
  let fixture: ComponentFixture<SmartPetProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPetProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
