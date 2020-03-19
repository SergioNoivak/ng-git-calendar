import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGitCalendarComponent } from './ng-git-calendar.component';

describe('NgGitCalendarComponent', () => {
  let component: NgGitCalendarComponent;
  let fixture: ComponentFixture<NgGitCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGitCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGitCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
