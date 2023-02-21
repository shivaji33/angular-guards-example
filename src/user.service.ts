import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private isLogedIn = JSON.parse(localStorage.getItem('isLogedIn'));
  constructor(private router: Router) { }

login() {
  this.isLogedIn = true;
  localStorage.setItem('isLogedIn', JSON.stringify(this.isLogedIn));
  this.router.navigate(['/posts']);
}

logout() {
  this.isLogedIn = false;
  localStorage.setItem('isLogedIn', JSON.stringify(this.isLogedIn));
  this.router.navigate(['/login']);
}

isAuthenticated() {
  return this.isLogedIn;
}
}