import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../Register';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {

  register:Register={
    username: "",
    email: "",
    password: ""
  }

  repeatPass = "";
  isDisabled = true;

  constructor(private shoeService:ShoeService, private router:Router) { }

  ngOnInit(): void {
  }

  registerAdmin(){
    if (this.register.password == this.repeatPass){
      console.log(this.register.username, this.register.email, this.register.password, this.repeatPass);

      this.shoeService.registerAdmin(this.register).subscribe(data => {
        console.log(data);
        alert("Admin profile Created Successfully.");
        this.goToLoginPage();
      },
      error => {
        console.log(error);
        alert("Enter a valid details with strong passwords");
      });
    }
  }

  onSubmit(){
    if (this.register.password == this.repeatPass){
      console.log(this.register.username, this.register.email, this.register.password, this.repeatPass);

      this.shoeService.registerUser(this.register).subscribe(data => {
        console.log(data);
        alert("User Created Successfully.");
        this.goToLoginPage();
      },
      error => {
        console.log(error);
        alert("Enter a valid details with strong passwords");
      });
    }
  }

  goToLoginPage(){
    this.router.navigate(['login']);
    
  }

  passKey(){
    let pass = prompt('Enter Admin pass key to access.');
    //let bar = confirm('Confirm or deny');
    console.log(pass);
    if (pass == "qwerty"){
      this.isDisabled = false;
    }
  }
}
