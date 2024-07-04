import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
            this.products = data;
        });
  }
  editProduct(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: number): void {
      this.productService.deleteProduct(id).subscribe(() => {
          this.products = this.products.filter(product => product.id !== id);
      });
  }
}
