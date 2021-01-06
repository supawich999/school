import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditofficerComponent } from './editofficer.component';

describe('EditofficerComponent', () => {
  let component: EditofficerComponent;
  let fixture: ComponentFixture<EditofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditofficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
