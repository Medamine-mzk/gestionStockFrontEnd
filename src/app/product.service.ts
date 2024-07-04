import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Model/Product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8000/api/products';


  private httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/ld+json'
    })
  };

  constructor(private http: HttpClient) { }

  //retourne la liste des produits
  getProductsOld(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<{ 'hydra:member': Product[] }>(this.apiUrl)
        .pipe(map(response => response['hydra:member']));
}
  //retourne un produit par ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  //créer un produit
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, this.httpOptions);
  }
  //modifier Produit
  updateProduct(id: number, product: Product): Observable<Product> {
      return this.http.put<Product>(`${this.apiUrl}/${id}`, product, this.httpOptions);
  }
  //effacer produit
  deleteProduct(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
