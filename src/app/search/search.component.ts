import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  myObservable = new Observable((observer) => {
    console.log('Observable Starts');
    setTimeout(() => {observer.next("1")}, 1000) 
    setTimeout(() => {observer.next("2")}, 2000) 
    setTimeout(() => {observer.next("3")}, 3000) 
    // setTimeout(() => {observer.error(new Error('There is an error, PLease try again!'))}, 3000) 
    setTimeout(() => {observer.next("4")}, 4000) 
    setTimeout(() => {observer.next("5")}, 5000) 
    setTimeout(() => {observer.complete()}, 6000) 
  })

  // observableByCreateMethod = Observable.create((observer) => {
  //   setTimeout(() => {observer.next("1")}, 1000) 
  //   setTimeout(() => {observer.next("2")}, 2000) 
  //   setTimeout(() => {observer.next("3")}, 3000) 
  //   // setTimeout(() => {observer.error(new Error('There is an error, PLease try again!'))}, 3000) 
  //   setTimeout(() => {observer.next("4")}, 4000) 
  //   setTimeout(() => {observer.next("5")}, 5000) 
  //   setTimeout(() => {observer.complete()}, 6000) 

  // })

  searchValue: string = '';
  display: boolean = true

  condition1: boolean = false;
  condition2: boolean = true;

  @Output()
  searchValueChanged: EventEmitter<string> = new EventEmitter;

  getTheSearchValue(){
    // console.log((<HTMLInputElement>eventData.target).value);
    // this.searchValue = (<HTMLInputElement>eventData.target).value;
    this.searchValueChanged.emit(this.searchValue)
  }

  sayHello(inputEl: HTMLInputElement){
    console.log(inputEl.value);
    this.condition1 = !this.condition1;
    this.condition2 = !this.condition2;
    alert('Hello, ' + inputEl.value)

  }

  DisplayNotice(){
    this.display = !this.display;
    this.myObservable.subscribe((val) => {
      console.log(val);
    }, (err) => {
      alert(err.message)
    }, () => {
      alert('Observable has completed emitting all values')

    })


  }

}
