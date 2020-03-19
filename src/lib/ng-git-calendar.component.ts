import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'lib-ng-git-calendar',
  template: `
    <lib-graph
        [year]="''+year"
        [colorLevel1]="''+colorLevel1"
        [colorLevel2]="''+colorLevel2"
        [colorLevel3]="''+colorLevel3"
        [data] ="match"
    ></lib-graph>
  `,
  styles: []
})
export class NgGitCalendarComponent implements OnInit {

  @Input('year')
   year: any;
   @Input('data')
   match: any;

   @Input('colorLevel1')
   colorLevel1: any;
   @Input('colorLevel2')
   colorLevel2: any;
   @Input('colorLevel3')
   colorLevel3: any;

  constructor() {



  }

  ngOnInit() {
  }

}
