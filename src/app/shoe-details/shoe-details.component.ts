import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { CartDetails } from '../CartDetails';
import { Shoe } from '../Shoe';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {

  shoe:Shoe={
    shoeId:0,
    name:"",
    type:"",
    color:"",
    price:0
  }

  id!:number;
  isAdmin!:boolean;
  cartDetails:CartDetails={
    cartId: 0,
    userName: "",
    shoeId: 0,
    quantity: 1
  }

  constructor(private shoeService:ShoeService, private route:ActivatedRoute, private cartService:CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.shoeService.getShoeById(this.id).subscribe(data => {
      this.shoe = data;
    });

    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin')!);
    //alert(this.isAdmin);

    this.cartDetails.userName = localStorage.getItem('username')!;
    this.cartDetails.shoeId = this.id;
  }

  addDetailsToCart(id:number){
    //console.log(this.cartDetails);
    this.cartDetails.shoeId = id;

    this.cartService.getCartByNameandId(this.cartDetails.userName, id).subscribe(data1 => {
      console.log(data1);
      
      if(data1[0]){
        console.log("working");
        if(data1[0].shoeId != null){
          alert("You added again.");
          data1[0].quantity++;
          this.cartDetails.cartId = data1[0].cartId;
          //console.log(data1[0]);
          this.cartService.updateCart(data1[0].cartId, data1[0]).subscribe(data2 => {
            console.log("Quantity added.");
          },
          error => console.log(error));
        }
      }
      else{
        //this.cartDetails.quantity += 1;
        this.cartService.addToCart(this.cartDetails).subscribe(data => {
          console.log("Data inserted");
          alert("Item added to cart successfully.");
        },
        error => console.log(error));
      }
      
    },
    error => console.log(error));
  }
}
