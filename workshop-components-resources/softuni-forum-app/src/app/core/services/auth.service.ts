import { Injectable, signal } from '@angular/core';
import { User } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = signal<boolean>(false);
  private _currentUser = signal<User | null>(null);

  private_users: User[] = [
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

  login(): void {}

  register(): void {}

  logout(): void {}
}
