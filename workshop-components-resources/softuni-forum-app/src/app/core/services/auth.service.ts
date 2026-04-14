import { Injectable, signal } from '@angular/core';
import { User } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = signal<boolean>(false);
  private _currentUser = signal<User | null>(null);
  private _users: User[] = [
    {
      _id: '5fa64a072183ce1728ff3719',
      username: 'David',
    },
    {
      _id: '5fa64b972183ce1728ff3720',
      username: 'Donald',
    },
    {
      _id: '5fa64c1f2183ce1728ff3723',
      username: 'Stephan',
    },
  ];

  constructor() {
    const savedUser = localStorage.getItem('_currentUser');

    if (savedUser) {
      const user: User = JSON.parse(savedUser);
      this._currentUser.set(user);
      this._isLoggedIn.set(true);
    }
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      const user = this._users[0];

      localStorage.setItem('currentUser', JSON.stringify(user));

      return true;
    }

    return false;
  }

  register(email: string, username: string, password: string, rePass: string): boolean {
    if (email && username && password && rePass) {
      const newUser: User = {
        _id: `user_${Date.now()}`,
        username: username,
      };

      this._users.push(newUser);
      this._currentUser.set(newUser);
      this._isLoggedIn.set(true);

      localStorage.setItem('currentUser', JSON.stringify(newUser));

      return true;
    }
    return false;
  }

  logout(): void {}
}
