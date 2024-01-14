import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'hooks';

  // // inputval:string=""
  // inputval:string[] = ["hello","hey dev"]

  constructor() {
    console.log('app constructor triggered');
  }

  // btnClick(input:HTMLInputElement){

  //   this.inputval.push(input.value)

  // }

  // ------------------------------------------------------ngDoCheck------------------------------------------------------------------

  // // inputval:string=""
  // inputval:string=''

  // btnClick(input:HTMLInputElement){

  //   this.inputval=input.value

  // }

  // ------------------------------------------------------ngDoCheck------------------------------------------------------------------

  // ------------------------------------------------------ngAfterContentCheck----------------------------------------------------------

  // inputval:string=""
  inputval: string = '';

  btnClick(input: HTMLInputElement) {
    this.inputval = input.value;
  }

  // ------------------------------------------------------ngAfterContentCheck----------------------------------------------------------

  // ------------------------------------------------------ngAfterViewInit-------------------------------------------------------

  ngAfterViewInit() {
    console.log('ngAfterViewInit triggered in app component called');
  }
  // ------------------------------------------------------ngAfterViewInit-------------------------------------------------------

  // -------------------------------------------------------ngAfterViewChecked-------------------------------------------------

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked triggered in app component called');
  }
  // -------------------------------------------------------ngAfterViewChecked-------------------------------------------------
}
