# NgGitCalendar
![alt](https://github.com/SergioNoivak/ng-git-calendar/blob/master/assets/f1.PNG)
ng-git-calendar is an angular interface component that implements a committing calendar similar to that of github, which can be used for various uses, such as fault logging and other records like any other calendar. 

## Getting Started

To start with ng-git-calendar, you can download it with the command :

```
npm install ng-git-calendar
```

## Usage

To use ng-git-calendar you need to import the ``NgGitCalendarModule`` into your application:

```typescript
// app.module.ts

import { AppComponent } from './app.component';
import { NgGitCalendarModule } from '../../../ng-git-calendar/src/lib/ng-git-calendar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	// ... another import
      
    NgGitCalendarModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

After that, just use the tag ``lib-ng-git-calendar`` to render the ng-git-calendar graph :

```html
<p>
    Oww cool!
</p>

<lib-ng-git-calendar
 year="2020"
 colorLevel1="#c6e48b"
 colorLevel2="#7bc96f"
 colorLevel3="#196127"
 [data]="data"
    ></lib-ng-git-calendar>

```

The ``data`` attribute represents the days that will be marked with some color / level. This ``data`` attribute consists of a two-dimensional vector in which each line contains a vector with two elements, the first element being the date to be marked in the format ``mm / dd / yyyy ``followed by the level to be marked (can be 1,2 or 3) . 



````typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    /*
    
    mm / dd / yyyy , level
    	
    */
  data=[
    ['01/21/2020','1'],
    ['06/20/2020','2'],
    ['12/25/2020','3'],
    ['11/05/2020','3'],

  ]

constructor(){}
}
````



## More complex example: Github random commits

In this example, the data attribute will be generated randomly and will produce a graph of commits

````typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aplicacao-teste';

  data = []
  format(data){
    var
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return mesF+"/"+diaF+"/"+anoF;
}


constructor(){

  this.generateData()

}

   generateData(){


    let start = new Date("01/01/"+('2020'));
    let end = new Date("12/31/"+('2020'));

    let listaDiv:HTMLElement = document.getElementById('squares')
    console.log(listaDiv)
    let loop = new Date(start);
    while(loop <= end){
      //  console.log(loop);
       let stringData = this.format(loop)
        this.data.push([stringData,""+this.getRandom()])
       var newDate = loop.setDate(loop.getDate() + 1);
       loop = new Date(newDate);
    }


   }

   getRandom(){
    let rand=Math.random()
    console.log(rand)
    if(rand<0.3)
      return 0;

      if(rand>0.3&&rand<0.5)
      return 1;


      if(rand>0.5&&rand<0.75)
      return 2;


      if(rand>0.75)
      return 3;

}
}

````

## Graph attributes

To render the chart ``ng-git-calendar``, you need: the ``year`` attribute that represents the year that the calendar will represent, and the ``colorLevel1``, ``colorLevel2``, ``colorLevel3`` attributes represents the three possible levels for each day of the calendar. It is only possible to have three levels and colors, if the variables ``colorLevel1``, ``colorLevel2``, ``colorLevel3``, the chart is assumed to be gray with level 0.

The ``data`` attribute represents the days that will be marked with some color / level. This ``data`` attribute consists of a two-dimensional vector in which each line contains a vector with two elements, the first element being the date to be marked in the format ``mm / dd / yyyy ``followed by the level to be marked (can be 1,2 or 3) . 



## Contact-me 

serginhosnovak@hotmail.com

