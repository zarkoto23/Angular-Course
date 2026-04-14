import { Injectable, signal } from "@angular/core";


@Injectable({
    providedIn:'root'
})

export class AuthService{

    private isLoggedIn=signal<boolean>(false)


    login():void{

    }

    register():void{


    }


    logout():void{

    }


}