import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  k="l"

  @Input('year')
  year: string;
  @Input('data')
  match: any;



  @Input('colorLevel1')
  colorLevel1: string;
  @Input('colorLevel2')
  colorLevel2: string;
  @Input('colorLevel3')
  colorLevel3: string;

  inicialHeight: number;
  inicialWidth: number;
  constanteHeight:number = 0;
  constanteWidth:number = 0;


  dias = []



  realMatch = {



  }
  constructor() { }

   dataAtualFormatada(data){
    var
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return mesF+"/"+diaF+"/"+anoF;
}
 ngOnInit(){

  this.inicialHeight = window.screen.height;
  this.inicialWidth = window.screen.width;

  for (let i = 0; i < this.match.length; i++) {

      this.realMatch[ (new Date(""+this.match[i][0])).toDateString()] = this.match[i][1]


  }

  let start = new Date("01/01/"+(this.year));
  let end = new Date("12/31/"+(this.year));

  let listaDiv:HTMLElement = document.getElementById('squares')
  let loop = new Date(start);
  while(loop <= end){
     let stringData = this.dataAtualFormatada(loop)

    if(this.realMatch[loop.toDateString()]==undefined){
      this.dias.push({stringData:stringData,"data-level":0})
    }
    else{

       this.dias.push({stringData:stringData,"data-level":parseInt(this.realMatch[loop.toDateString()])})
      }

     var newDate = loop.setDate(loop.getDate() + 1);
     loop = new Date(newDate);
  }


 }

 onResize(event: any):void{

  this.constanteHeight = event.target.innerHeight/this.inicialHeight;
  this.constanteWidth = event.target.innerWidth/this.inicialWidth;


 }

getColor(dia){

    switch(dia['data-level']){
        case 1:
            return this.colorLevel1;
            break;
            case 2:
              return this.colorLevel2;
              break;
              case 3:
            return this.colorLevel3;
            break;
            default:
              return ''
          }


}
}
