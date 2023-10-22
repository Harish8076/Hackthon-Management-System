import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsignupComponent } from './teamsignup.component';

describe('TeamsignupComponent', () => {
  let component: TeamsignupComponent;
  let fixture: ComponentFixture<TeamsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsignupComponent]
    });
    fixture = TestBed.createComponent(TeamsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
