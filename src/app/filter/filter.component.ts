import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {



  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number= 0;


  selectedRadioButtonValue: string = 'all'

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string>= new EventEmitter;

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  }

}
