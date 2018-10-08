import { Injectable } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //private cartUrl = 'api/cart';
actualCart: Product[] = [];
sum: number = 0;
// /private http: HttpClient
  constructor() { }

// getCart(): Observable<Cart[]> {
//   return this.http.get<Cart[]>(this.cartUrl)
//   .pipe(
//     catchError(this.handleError('getCart', [])));
// }

// private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
//     console.log(`${operation} failed: ${error.message}`); // wywala info na konsoli
//     console.error(error); // wywala blad na konsoli
//     // przekierowuje do strony np. glownej
//     return of(result as T);
//   };
// }

// updateCart(product: Cart): Observable<any> {
//   return this.http.put(this.cartUrl, product);
// }

// addCart (product: Cart): Observable<Cart> {
//   return this.http.post<Cart>(this.cartUrl, product);
// }

// deleteCart (product: Cart | number): Observable<Cart> {
//   const id = typeof product === 'number' ?product : product.id;
//   const url = `${this.cartUrl}/${id}`;
//   return this.http.delete<Cart>(url);
// }

updateCart(product:Product) {
  for (var i=0; i < this.actualCart.length; i++) {
      if (this.actualCart[i].id === product.id) {
        this.actualCart[i].amount = this.actualCart[i].amount + product.amount;
      }
  }
  this.getSum();
}

addToCart(product: Product) {
  this.actualCart[this.actualCart.length] = product;
}

getActualCart() {
  return this.actualCart;
}

getSum(): number {
  this.sum = 0;
  for (let a of this.actualCart) {
    this.sum += a.amount * a.price;
  }
  return this.sum;
}

}
