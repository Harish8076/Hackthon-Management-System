import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorregistrationComponent } from './mentorregistration.component';

describe('MentorregistrationComponent', () => {
  let component: MentorregistrationComponent;
  let fixture: ComponentFixture<MentorregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorregistrationComponent]
    });
    fixture = TestBed.createComponent(MentorregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
