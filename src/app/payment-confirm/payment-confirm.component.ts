import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.css']
})
export class PaymentConfirmComponent implements OnInit {

  amount!:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.amount = localStorage.getItem('totalPrice')!;
  }

  goToHome(){
    this.router.navigate(['/shoes']);
  }
}
