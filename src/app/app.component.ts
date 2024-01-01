import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_procademy';

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpTo(value);

    })
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})    
  }
  
}
