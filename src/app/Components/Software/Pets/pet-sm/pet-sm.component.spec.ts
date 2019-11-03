import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSmComponent } from './pet-sm.component';

describe('PetSmComponent', () => {
  let component: PetSmComponent;
  let fixture: ComponentFixture<PetSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
