import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofficerComponent } from './addofficer.component';

describe('AddofficerComponent', () => {
  let component: AddofficerComponent;
  let fixture: ComponentFixture<AddofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddofficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
