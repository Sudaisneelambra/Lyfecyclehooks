import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hooks';

  inputval:string=""
  
  constructor(){
    console.log('app constructor triggered');
    
  }

  btnClick(input:HTMLInputElement){

    this.inputval=input.value

  }
}
