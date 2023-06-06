import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CartDetails } from '../CartDetails';

@Component({
  selector: 'app-delete-cart',
  templateUrl: './delete-cart.component.html',
  styleUrls: ['./delete-cart.component.css']
})
export class DeleteCartComponent implements OnInit {

  id!: number;
  cartDetails:CartDetails={
    cartId: 0,
    userName: "",
    shoeId: 0,
    quantity: 0
  }

  constructor(private cartService: CartService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    /*
    this.cartService.getCartById(this.id).subscribe(data => {
      this.cartDetails = data;
    },
    error => console.log(error));
    */

    this.cartService.deleteCart(this.id).subscribe(data => {
      console.log("Data deleted successfully");
    },
    error => console.log(error));
    //location.reload();
    this.reloadPage();
    this.router.navigate(['cart']);
  }

  reloadPage(){
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
