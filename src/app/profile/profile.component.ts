import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  GotoHomePage(){
    // Always use absolute path
    this.router.navigate(['home'], {relativeTo: this.activatedRoute})
    // this.router.navigateByUrl('/home')
  }

}
