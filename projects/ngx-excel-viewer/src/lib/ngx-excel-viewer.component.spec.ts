import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxExcelViewerComponent } from './ngx-excel-viewer.component';

describe('NgxExcelViewerComponent', () => {
  let component: NgxExcelViewerComponent;
  let fixture: ComponentFixture<NgxExcelViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxExcelViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxExcelViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
