import {
  Component,
  ElementRef,
  AfterContentChecked,
  AfterContentInit,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  SimpleChanges,
  ViewChild,
  ContentChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  // title:string="demo component"
  // @Input()message!:string[]

  // @ViewChild('temp') tempara:ElementRef;

  constructor() {
    console.log('demo constructor triggered');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ng on changes hook triggered');
    // console.log(this.message);
    // console.log(changes);
  }

  ngOnInit() {
    // in the ng on init time the view is not created yet
    // console.log('ng OnInit hook triggered');
    // console.log(this.tempara.nativeElement.innerHtml);
  }

  // ------------------------------------------------------------------------ngDoCheck-------------------------------------------------------------

  // @Input()message!:string

  ngDoCheck() {
    // console.log("ngDocheck is triggered");
    // console.log("inDoCheck",this.paracontent);
  }

  // ------------------------------------------------------------------------ngDoCheck-------------------------------------------------------------

  // ---------------------------------------------------------------------ngAfterContentInit-------------------------------------------------------

  // @Input()message!:string

  // @ContentChild('temp')paracontent:ElementRef

  ngAfterContentInit() {
    // console.log("ngAfterContentInit triggered");
    // console.log("inAfterContentInit",this.paracontent.nativeElement);
  }

  // ---------------------------------------------------------------------ngAfterContentInit-------------------------------------------------------

  // -------------------------------------------------------------------ngAfterContentCheck-----------------------------------------

  // @Input()message!:string

  // @ContentChild('temp')paracontent:ElementRef

  ngAfterContentChecked() {
    //   console.log("ngAfterContentChecked triggered");
    //   console.log("inAfterContentInit",this.paracontent.nativeElement);
    // console.log("This from AfterContetChecked",this.tempara);
  }

  // -------------------------------------------------------------------ngAfterContentCheck-----------------------------------------

  // ---------------------------------------------------------------------ngAfterViewInit----------------------------------------------

  // @Input()message!:string

  // @ViewChild('temp') tempara:ElementRef;

  // @ContentChild('temp')paracontent:ElementRef

  ngAfterViewInit() {
    console.log('ngAfterViewInit triggered');
    // console.log("This from AfterVie Init",this.tempara);
  }

  // ---------------------------------------------------------------------ngAfterViewInit----------------------------------------------

  // --------------------------------------------------------------ngAfterViewChecked-------------------------------------

  @Input() message!: string;

  @ViewChild('temp') tempara: ElementRef;
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked triggered');
    console.log(this.tempara.nativeElement.textContent);
  }

  // --------------------------------------------------------------ngAfterViewChecked-------------------------------------
}
