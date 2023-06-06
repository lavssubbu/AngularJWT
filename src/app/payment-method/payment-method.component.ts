import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  total!:string;
  cardNum = "";
  cvv = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.total = localStorage.getItem('totalPrice')!;
  }

  paymentStatus(){
    this.router.navigate(['payment-confirm']);
  }
}
