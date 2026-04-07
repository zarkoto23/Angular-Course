import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Theme } from "../../models";

@Injectable({
    providedIn:'root'
})

export class PostsService{

    private apiUrl='http:://localhost:3000/api/posts?limit={0}'

    constructor(private httpC:HttpClient){

    }

    getLatestPosts(limit:number=5):Observable<Theme[]>{
        return this.httpC.get<Theme[]>(this.apiUrl)
    }
}