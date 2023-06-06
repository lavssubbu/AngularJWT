import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';
import { DeleteShoeComponent } from './delete-shoe/delete-shoe.component';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginModelComponent } from './login-model/login-model.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { DeleteCartComponent } from './delete-cart/delete-cart.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModelComponent } from './register-model/register-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateShoeComponent,
    UpdateShoeComponent,
    DeleteShoeComponent,
    ShoeListComponent,
    ShoeDetailsComponent,
    LoginModelComponent,
    CartListComponent,
    DeleteCartComponent,
    PaymentMethodComponent,
    PaymentConfirmComponent,
    RegisterModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
