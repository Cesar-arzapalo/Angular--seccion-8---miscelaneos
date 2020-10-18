import { Component, OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <hr>
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'orange'">
        Hola mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

}
