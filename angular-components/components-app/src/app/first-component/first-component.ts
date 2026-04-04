import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Company } from '../models/company';
import { UsersService } from '../services/products.service';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent implements OnInit {
 

  counter: number = 0;

  isLoggedIn: boolean = true;

  onClickBtn() {
    // console.log('Button is clicked');

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
    // console.log(this.isColorChange);
  }

  users:User[]=[]

  constructor(private usersServ:UsersService) {


    // console.log('constructor log');
    this.img =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNj3KVn4EbrLuoJ0qYoLWQ4LSiQNWAjQsNQ&s';
  }
  ngOnInit(): void {
    this.users=this.usersServ.getUsers()
  }



}
