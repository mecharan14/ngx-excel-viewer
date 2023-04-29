import { TestBed } from '@angular/core/testing';

import { NgxExcelViewerService } from './ngx-excel-viewer.service';

describe('NgxExcelViewerService', () => {
  let service: NgxExcelViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxExcelViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
