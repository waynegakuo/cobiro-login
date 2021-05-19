import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  login(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    const bodyData = {
      email: email,
      password: password
    }
    this.loginService.loginUser(bodyData);
  }

}
