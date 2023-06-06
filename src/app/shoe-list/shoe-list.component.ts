import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CartDetails } from '../CartDetails';
import { Shoe } from '../Shoe';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  shoes:Shoe[] | undefined;
  title:string = "Please login to continue..";
  isAdmin!:boolean;
  cartDetails:CartDetails={
    cartId: 0,
    userName: "",
    shoeId: 0,
    quantity: 1
  }
  id!:number;

  constructor(private shoeService:ShoeService, private router:Router, private route:ActivatedRoute, private cartService:CartService) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') != null){
      this.title = "Welcome " + localStorage.getItem('username');
    }
    this.getShoes();

    this.findUserRole();

    this.id = this.route.snapshot.params['id'];
    this.cartDetails.userName = localStorage.getItem('username')!;
  }

  getShoes(){
    this.shoeService.getAllShoes().subscribe(data => {
      this.shoes = data;
      //console.log(this.shoes);
    },
    error => {
      console.log(error);
    });
  }

  shoeDetails(id:number){
    this.router.navigate(['shoe-details', id]);
  }

  updateShoe(id:number){
    this.router.navigate(['update-shoe', id]);
  }

  deleteShoe(id:number){
    this.router.navigate(['delete-shoe', id]);
  }

  findUserRole(){
    let token = localStorage.getItem('token');
    if (token != null){
      let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));

      console.log(decodedJWT);

      //const decodedName = decodedJWT["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      const decodedRole = decodedJWT["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"][1];
      //console.log('name: ' + decodedName);
      //console.log('role: ' + decodedRole);
      if (decodedRole == "Admin"){
        console.log("You are a Admin dude");
        this.isAdmin = true;
      }
      else{
        console.log("Oops, you are a User");
        this.isAdmin = false;
      }
      localStorage.setItem('isAdmin', JSON.stringify(this.isAdmin).toString());
      //alert(localStorage.getItem('isAdmin'));
    }
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

  //dummy
  addToCart(){
    this.router.navigate(['add-cart']);
  }
}
