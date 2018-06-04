import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string;
  public password: string;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public onLogin(log: string, pass: string) {
    console.log(log, pass);
    this.router.navigate(['mainProducts']);
  }
}
