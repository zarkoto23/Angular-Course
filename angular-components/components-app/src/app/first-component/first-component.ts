import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Company } from '../models/company';
import { UsersService } from '../services/users.service';
import { Subscriber, Subscription } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent implements OnInit {
  counter: number = 0;
posts:Post[]=[]
  subscribe!:Subscription

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

  users: User[] = [];

  constructor(private usersServ: UsersService) {
    // console.log('constructor log');

    this.img =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNj3KVn4EbrLuoJ0qYoLWQ4LSiQNWAjQsNQ&s';
  }
  ngOnInit(): void {
    // this.users = this.usersServ.getUsers();

   this.subscribe=this.usersServ.getUsers().subscribe((res:User[])=>{

    this.users=res

   })
  }

  ngOnDestroy():void{
    this.subscribe.unsubscribe()
  }

  registerUser() {
    const userNew = <User>{
      id: 21,
      name: 'new',
      age: 523432,
      company: <Company>{
        name: 'babati',
      },
    };

    this.usersServ.addUser(userNew);
  }


  getPost(){
    const r=this.usersServ.getUserPosts().subscribe((r:Post[])=>{
      this.posts=r
      console.log(r);
    })

    

    
  }
}
