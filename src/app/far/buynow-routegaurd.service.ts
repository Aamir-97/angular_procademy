import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BuynowRoutegaurdService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.authService.isLoggedInActivated()){
        return true;
      } else {
        this.router.navigate(['']);
        return false;        
      }
  }


  constructor(private authService: AuthService, private router: Router) { }
}
