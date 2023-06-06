import { Token } from '../Token'
import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.css']
})
export class LoginModelComponent implements OnInit {

  login:Login={
    username : "",
    password : ""
  }

  constructor(private shoeService: ShoeService, private router:Router, private comp:AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.login.username, this.login.password);
    if (this.login.username && this.login.password){
      this.getToken();
    }
    else { alert("Please enter username and password first"); }
  }

  getToken(){
    this.shoeService.userLogin(this.login).subscribe(data => {
      alert("Check the token in console window..");
      //console.log(data.token);
      this.comp.onLoginClick();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", this.login.username);
      this.router.navigate(['/shoes']);
    },
    error => {
      console.log(error);
      alert("Invalid login details");
    });
  }

  register(){
    this.router.navigate(['register']);
  }
}
