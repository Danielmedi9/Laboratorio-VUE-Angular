import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.loggedIn.asObservable();
  private username: string = '';

  constructor() {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      this.username = storedUser;
      this.loggedIn.next(true);
    }
  }

  getUsername(): string {
    return this.username;
  }

  login(username: string, password: string): boolean {
    if (username !== 'master@lemoncode.net') {
      alert('El nombre de usuario es incorrecto');
      return false;
    }

    if (password !== '12345678') {
      alert('La contraseña es incorrecta');
      return false;
    }

    this.loggedIn.next(true);
    this.username = username;
    localStorage.setItem('username', username);
    return true;
  }

  logout() {
    this.loggedIn.next(false);
    this.username = '';
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
