// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-upgrades',
//   templateUrl: './upgrades.component.html',
//   styleUrls: ['./upgrades.component.css']
// })
// export class UpgradesComponent {

// }
// import { Component, Input } from '@angular/core';

// import {Component, Input, Output, EventEmitter} from '@angular/core';

// Q2

// @Component({
//   selector: 'app-upgrades',
//   //Update this template
//   template: `<div>
//   <h1 (click)="toggle()">Latest upgrades</h1>
//   <div id="upgrade-list" *ngIf="newButtonsVisible">
//     <p >New buttons</p>
//     <p>Even more new buttons</p>
//   </div>
// </div>
// `
// })
// export class UpgradesComponent {
//   //Update this component
//   public newButtonsVisible: boolean = false;

//   toggle(){
//     this.newButtonsVisible = !this.newButtonsVisible;

//   }
// }

// Q3

// @Component({
//   selector: 'counter',
//   template: `
//     <button (click)="increment()">Increment</button>
//     <p>{{ count }}</p>
//   `
// })
// export class Counter {
//   @Input() count: number = 0;
//   @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

//   increment() {
//     this.count++;
//     this.countChange.emit(this.count);
//   }
// }

// @Component({
//   selector: 'app-main',
//   template: `
//     <counter [count]="counterState" (countChange)="updateCounter($event)"></counter>
//   `
// })
// export class AppComponentTest {
//   public counterState: number = 1;

//   updateCounter(newCount: number) {
//     this.counterState = newCount;
//   }
// }
