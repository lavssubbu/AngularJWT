import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoe } from '../Shoe';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-create-shoe',
  templateUrl: './create-shoe.component.html',
  styleUrls: ['./create-shoe.component.css']
})
export class CreateShoeComponent implements OnInit {

  shoe:Shoe={
    shoeId: 0,
    name: "",
    type: "",
    color: "",
    price: 0
  }

  constructor(private shoeService:ShoeService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isAdmin') == "false"){
      alert("This page is for admin purpose only");
      this.router.navigate(['/shoes']);
    }
  }

  saveShoe(){
    this.shoeService.createShoe(this.shoe).subscribe(data => {
      console.log(data);
      this.goToShoeList();
    });
  }

  goToShoeList(){
    this.router.navigate(['/shoes'])
  }

  onSubmit(){
    //console.log(this.shoe);
    if (localStorage.getItem('token') != null){
      this.saveShoe();
    }
    else {
      alert("Login to add item..");
    }
  }
}
