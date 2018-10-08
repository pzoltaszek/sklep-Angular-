import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

private productsUrl = 'api/products';

constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      catchError(this.handleError('getProducts', [])));
}

getProduct(id: number): Observable<Product> {
  const url = `${this.productsUrl}/${id}`
  return this.http.get<Product>(url).pipe(
    catchError(this.handleError<Product>(`getProduct id=${id}`)));
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log(`${operation} failed: ${error.message}`); // wywala info na konsoli
    console.error(error); // wywala blad na konsoli
    // przekierowuje do strony np. glownej
    return of(result as T);
  };
}

updateProduct(product: Product): Observable<any> {
  return this.http.put(this.productsUrl, product);
}

addProduct (product: Product): Observable<Product> {
  return this.http.post<Product>(this.productsUrl, product);
}

deleteProduct (product: Product | number): Observable<Product> {
  const id = typeof product === 'number' ?product : product.id;
  const url = `${this.productsUrl}/${id}`;
  return this.http.delete<Product>(url);
}

searchProduct(term: string): Observable<Product[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`);
}

getDairyProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.productsUrl}/?category=dairy`);
}

getDairyMilkProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.productsUrl}/?subcategory=milk`);
}

getDairyCheeseProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.productsUrl}/?subcategory=cheese`);
}

getDairyYoghurtProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.productsUrl}/?subcategory=yoghurt`);
}

getFriutsAndVegetablesProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.productsUrl}/?category=fruits & vegetables`);
}

getFriutsProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.productsUrl}/?subcategory=fruits`);
}

getVegetablesProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.productsUrl}/?subcategory=vegetables`);
}

}
