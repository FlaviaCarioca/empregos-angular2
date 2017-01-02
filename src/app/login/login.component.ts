import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '.././services/auth.service'; 

@Component({
  selector: 'emp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  message: string

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { 
    this.loginForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {}

  login(credentials): void {
    this.authService
        .login(credentials.username, credentials.password)
        .subscribe((res: Object) => {
          console.log(res);
          sessionStorage.setItem('token', res['auth_token']);
          sessionStorage.setItem('userType', res['user_type']);
          sessionStorage.setItem('username', credentials.username);
          this.message = '';   
        },
        (err) => {
          this.message = err.error;
        });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getUser(): string {
    return this.authService.getUser();
  }
 
}
