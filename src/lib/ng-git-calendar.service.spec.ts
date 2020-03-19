import { TestBed } from '@angular/core/testing';

import { NgGitCalendarService } from './ng-git-calendar.service';

describe('NgGitCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGitCalendarService = TestBed.get(NgGitCalendarService);
    expect(service).toBeTruthy();
  });
});
