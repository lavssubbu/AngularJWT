import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apishoes2';
  btn_text = 'Login';

  constructor(private router:Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.btn_text = 'Logout'
    }
  }

  public onLoginClick(){
    if (this.btn_text == 'Login' && localStorage.getItem('token') == null){
      this.btn_text = 'Logout';
    }
  }

  onLogoutClick(){
    if (this.btn_text == 'Logout' && localStorage.getItem('token') != null) {
      if(confirm("Do you want to Logout")) {
        localStorage.clear();
        alert("You have been logged out..");
        this.btn_text = 'Login';
      }
      else{this.router.navigate(['/shoes']);}
    }
  }

  homePage(){
    alert("Your home page is under development\nTry after some days");
  }
}
