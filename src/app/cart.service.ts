import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './Cart';
import { CartDetails } from './CartDetails';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseURL = "https://localhost:44393/api/Cart";

  constructor(private httpClient: HttpClient) { }

  getCartByName(name:string):Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.baseURL}/${name}/cartByName`);
  }

  /*
  getCartById(id:number):Observable<CartDetails>{
    return this.httpClient.get<CartDetails>(`${this.baseURL}/${id}/cartById`);
  }
  */

  getCartByNameandId(name:string, id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${name}/${id}/cartByNameAndId`);
  }

  deleteCart(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  addToCart(cartDetails:CartDetails):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cartDetails);
  }

  updateCart(id:number, cartDetails:CartDetails):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cartDetails);
  }
}
