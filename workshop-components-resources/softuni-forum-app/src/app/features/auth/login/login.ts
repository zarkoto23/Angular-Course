import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService=inject(AuthService)
  private router=inject(Router)


  email:string=''
  password:string=''
  emailError:boolean=false
  passwordError:boolean=false

  emailErrMsg:string=''
  passwordErrMsg:string=''


  validateEmail():void{
    if(!this.email){
      this.emailError=false
      this.emailErrMsg='email is requred!!'
    }else if(!this.isValidateEmail(this.email)){
      this.emailError=true
      this.emailErrMsg='email is not valid (rgx) '

    }else{
      this.emailError=false
      this.emailErrMsg=''
    }
  }

  private isValidateEmail(email:string):boolean{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailRegex.test(email)

  }

  validatePassword():void{
    if(!this.password){
      this.passwordError=true
      this.passwordErrMsg='pass is not validate'
    }else if(this.password.length<4){
      this.passwordError=true
      this.passwordErrMsg='password should be minimum 4ch'
    }else{
      this.passwordError=true
      this.passwordErrMsg=''
    }
  }

  isFormValid():boolean{
    return Boolean(this.email)&& Boolean(this.password)&& !this.emailError && !this.passwordErrMsg
  }

  onSubmit():void{
    this.validateEmail()
    this.validatePassword()

    if(this.isFormValid()){
      const res=this.authService.login(this.email, this.password)

      if(res===true){
        this.router.navigate(['/home'])
      }
    }
  }

}
