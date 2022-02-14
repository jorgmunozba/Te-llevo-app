import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  
export class AuthGuard implements CanLoad {
  
  constructor(private router: Router){}

  canLoad(){
    let logueado = localStorage.getItem('logueado')
    if(logueado){
      return true;
    } else{
      this.router.navigate(['inicio/'])
      return false
    }
    
  }
}
