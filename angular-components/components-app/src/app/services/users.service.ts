import { Injectable } from "@angular/core";
import { Company } from "../models/company";
import { Product } from "../models/product.model";
import { User } from "../models/user.model";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post.model";

@Injectable({
  providedIn:'root'
})

export class UsersService{

  constructor(private httpC:HttpClient){

  }

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

    getUsers():Observable <User[]>{

        return of(this.users)
    }

    addUser(user:User){
      this.users.push(user)
    }


    getUserPosts():Observable<Post[]>{

      const url='https://jsonplaceholder.typicode.com/posts'

      

      const resp= this.httpC.get<Post[]>(url)


      return resp
      
    }
}