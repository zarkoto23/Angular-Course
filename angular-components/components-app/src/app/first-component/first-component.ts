import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Company } from '../models/company';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  users: User[] = [
    {
      id: 1,
      name: 'QESHO',
      age: 66,
      company: <Company>{
        name: 'muni',
      },
    },
    {
      id: 2,
      name: 'pESHO',
      age: 44,
  
    },
    {
      id: 3,
      name: 'MESHO',
      age: 22,
      company: <Company>{
        name: 'huni',
      },
    },
    {
      id: 4,
      name:'hjgfhjf',
      age: 12,
      company: <Company>{
        name: 'babuni',
      },
    },
  ];

  counter: number = 0;

  isLoggedIn: boolean = true;

  onClickBtn() {
    console.log('Button is clicked');

    this.counter += 1;
  }

  onClickLi(n: { age: number }) {
    n.age += 1;
  }

  img: string = '';

  colorClass = 'kur';

  isColorChange: boolean = true;

  onClickIsColor() {
    this.isColorChange = !this.isColorChange;
    console.log(this.isColorChange);
  }

  constructor() {
    console.log('constructor log');
    this.img =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNj3KVn4EbrLuoJ0qYoLWQ4LSiQNWAjQsNQ&s';
  }
}
