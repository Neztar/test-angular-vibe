import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  public loggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  constructor() {}

  login(username: string, password: string): boolean {
    // Hardcoded credentials: username: test, password: 1234
    if (username === 'test' && password === '1234') {
      localStorage.setItem('auth_token', 'logged_in');
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  private hasToken(): boolean {
    return localStorage.getItem('auth_token') !== null;
  }
}
