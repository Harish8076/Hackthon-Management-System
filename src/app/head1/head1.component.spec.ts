import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Head1Component } from './head1.component';

describe('Head1Component', () => {
  let component: Head1Component;
  let fixture: ComponentFixture<Head1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Head1Component]
    });
    fixture = TestBed.createComponent(Head1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
