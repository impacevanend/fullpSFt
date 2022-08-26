import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  name: string;
  price: number;

  constructor(private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate():any {
    const product = new Product(this.name, this.price);
    this.productService.createProduct(product).subscribe(
      data => {
          this.toastr.success('product created successfully','OK',{
            timeOut:3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
      }, err => {
        this.toastr.error(err.error.message,'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    ); 
  }

}
