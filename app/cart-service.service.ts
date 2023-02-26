import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }
  baseURL:string = 'http://localhost:2003';
  addToCartEndPoint:string=this.baseURL+'/restaurant/cart/add';
 getCartEndPoint:string=this.baseURL+'/restaurant/cart/cartget';


 addToCart(item: Item):Observable<Item> {

  console.log("inside method 1 : added to" +item);
  console.log(item.itemName);
  
  
  return this.http.post<Item>(`${this.addToCartEndPoint}`,item);
  
}

getCart():Observable<Cart>{
  console.log("inside get method 1 : add to "+this.getCartEndPoint);
  return this.http.get<Cart>(`${this.getCartEndPoint}`);

}
}