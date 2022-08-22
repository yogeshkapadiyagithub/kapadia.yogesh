import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  exitEmpDetaiRoute = false;

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'ad12') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Yogesh Kapadia', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  setExitEmpDetaiRoute(value: boolean){
    this.exitEmpDetaiRoute = value;
  }

  getExitEmpDetaiRoute(){
    return this.exitEmpDetaiRoute;
  }
}
