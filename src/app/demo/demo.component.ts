import { Component, Input, OnChanges, SimpleChange, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {


  title:string="demo component"
  @Input()message!:string

  constructor(){
    console.log('demo constructor triggered');
    console.log(this.title);
    console.log(this.message);
  }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('ng on changes hook triggered');
      console.log(this.message); 
      console.log(changes);
      
    }

  

}
