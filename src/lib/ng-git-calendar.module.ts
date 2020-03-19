import { NgModule } from '@angular/core';
import { NgGitCalendarComponent } from './ng-git-calendar.component';
import { GraphComponent } from './graph/graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";






@NgModule({
  declarations: [NgGitCalendarComponent, GraphComponent],
  imports: [    CommonModule,




  ],
  exports: [NgGitCalendarComponent]
})
export class NgGitCalendarModule { }
