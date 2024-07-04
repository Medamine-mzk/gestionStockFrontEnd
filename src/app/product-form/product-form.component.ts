import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit  {
  product: any = {
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) 
  { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(Number(id)).subscribe((data: any) => {
          this.product = data;
      });
  }
}

  saveProduct(): void {
        if (this.product.id) {
            this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
                this.router.navigate(['/products']);
            });
        } else {
            this.productService.createProduct(this.product).subscribe(() => {
                this.router.navigate(['/products']);
            });
        }
    }
}


