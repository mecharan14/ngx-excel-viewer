import { NgModule } from '@angular/core';
import { NgxExcelViewerComponent } from './ngx-excel-viewer.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxExcelViewerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxExcelViewerComponent
  ]
})
export class NgxExcelViewerModule { }
