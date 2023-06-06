import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoe } from './Shoe';
import { Login } from './Login';
import { Token } from './Token';
import { Register } from './Register';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  private baseURL = "https://localhost:44393/api/Shoes";
  private loginURL = "https://localhost:44393/api/Authenticate/login"
  private registerURL = "https://localhost:44393/api/Authenticate/register";
  private registerAdminURL = "https://localhost:44393/api/Authenticate/register-admin";

  constructor(private httpClient:HttpClient) { }

  getAllShoes():Observable<Shoe[]>{
    return this.httpClient.get<Shoe[]>(`${this.baseURL}`);
  }

  createShoe(shoe:Shoe):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, shoe);
  }

  getShoeById(id:number):Observable<Shoe>{
    return this.httpClient.get<Shoe>(`${this.baseURL}/${id}`);
  }

  updateShoe(id:number, shoe:Shoe):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, shoe);
  }

  deleteShoe(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // login
  userLogin(login:Login):Observable<Token>{
    return this.httpClient.post<Token>(`${this.loginURL}`, login);
  }

  registerUser(register:Register):Observable<Object>{
    return this.httpClient.post(`${this.registerURL}`, register);
  }

  registerAdmin(register:Register):Observable<Object>{
    return this.httpClient.post(`${this.registerAdminURL}`, register);
  }
}
