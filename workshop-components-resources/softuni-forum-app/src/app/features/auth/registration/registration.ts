import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private authService = inject(AuthService);
  private router = inject(Router);

  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  rePass: string = '';

  usernameErr: boolean = false;
  phoneErr: boolean = false;
  emailErr: boolean = false;
  passwordErr: boolean = false;
  rePassErr: boolean = false;

  usernameErrMsg: string = '';
  phoneErrMsg: string = '';
  emailErrMsg: string = '';
  passwordErrMsg: string = '';
  rePassErrMsg: string = '';

  validateUsername(): void {
    if (!this.username) {
      this.usernameErr = true;
      this.usernameErrMsg = 'email is requred!!';
    } else {
      this.usernameErr = false;
      this.usernameErrMsg = '';
    }
  }

  validateEmail(): void {
    if (!this.email) {
      this.emailErr = true;
      this.emailErrMsg = 'email is requred!!';
    } else if (!this.isValidateEmail(this.email)) {
      this.emailErr = true;
      this.emailErrMsg = 'email is not valid (rgx) ';
    } else {
      this.emailErr = false;
      this.emailErrMsg = '';
    }
  }
  validatePassword(): void {
    if (!this.password) {
      this.passwordErr = true;
      this.passwordErrMsg = 'pass is not validate';
    } else if (this.password.length < 4) {
      this.passwordErr = true;
      this.passwordErrMsg = 'password should be minimum 4ch';
    } else {
      this.passwordErr = false;
      this.passwordErrMsg = '';
    }

    if (this.rePass) {
      this.validateRePass();
    }
  }

  validatePhone(): void {
    if (!this.phone) {
      this.phoneErr = true;
      this.phoneErrMsg = 'phone is requred!!';
    } else if (!this.isValidPhone(this.phone)) {
      this.phoneErr = true;
      this.phoneErrMsg = 'phone is not valid (rgx) ';
    } else {
      this.phoneErr = false;
      this.phoneErrMsg = '';
    }
  }

  validateRePass(): void {
    if (!this.rePass) {
      this.rePassErr = true;
      this.rePassErrMsg = 'rePass is not valid';
    } else if (this.password !== this.rePass) {
      this.rePassErr = true;
      this.rePassErrMsg = 'rePass should be same like password';
    } else {
      this.rePassErr = false;
      this.rePassErrMsg = '';
    }
  }

  
  isFormValid():boolean{
    return Boolean(this.rePass)&&
     Boolean(this.email)&& 
     Boolean(this.password)&&
     Boolean(this.phone) && 
     Boolean(this.username)&&
     !this.emailErr && 
     !this.passwordErr && 
     !this.usernameErr &&
     !this.phoneErr &&
     !this.rePassErr


  }

  private isValidateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^\d{9}$/;

    return phoneRegex.test(phone);
  }


  onSubmit():void{
    this.validateEmail()
    this.validatePassword()
    this.validateRePass()
    this.validateUsername()
    this.validatePhone()

    if(this.isFormValid()){
      const res=this.authService.register(this.email, this.password, this.rePass, this.username, this.phone)

      if(res===true){
        this.router.navigate(['/home'])
      }
    }
  }

}
