import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { DeleteCartComponent } from './delete-cart/delete-cart.component';
import { DeleteShoeComponent } from './delete-shoe/delete-shoe.component';
import { LoginModelComponent } from './login-model/login-model.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { RegisterModelComponent } from './register-model/register-model.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';

const routes: Routes = [
  {path:'shoes', component:ShoeListComponent},
  {path:'create-shoe', component:CreateShoeComponent},
  {path:'shoe-details/:id', component:ShoeDetailsComponent},
  {path:'update-shoe/:id', component:UpdateShoeComponent},
  {path:'delete-shoe/:id', component:DeleteShoeComponent},
  {path:'login', component:LoginModelComponent},
  {path:'cart', component:CartListComponent},
  {path:'delete-cart/:id', component:DeleteCartComponent},
  {path:'payment-method', component:PaymentMethodComponent},
  {path:'payment-confirm', component:PaymentConfirmComponent},
  {path:'register', component:RegisterModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
