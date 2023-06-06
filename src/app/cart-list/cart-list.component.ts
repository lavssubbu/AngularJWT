import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../Cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  name!: string;
  total:number = 0;

  cart:Cart[] | undefined;

  constructor(private cartService: CartService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isAdmin') == "true"){
      alert("This page is for Customers.");
      this.router.navigate(['/shoes']);
    }
    localStorage.removeItem('totalPrice');
    this.name = localStorage.getItem('username')!;
    console.log(this.name);

    this.cartService.getCartByName(this.name).subscribe(data => {
      this.cart = data;
      //console.log(data);

      for (let row of data){
        this.total += row.price * row.quantity;
      }   
    },
    error => console.log(error));
  }

  deleteItem(id:number){
    this.router.navigate(['delete-cart', id]);
  }

  proceedToPay(){
    localStorage.setItem('totalPrice', this.total.toString());
    this.router.navigate(['payment-method']);
  }
}
