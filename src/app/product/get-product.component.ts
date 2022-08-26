import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {

  produdcts: Product[] = [];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService) { }
  


  ngOnInit() {
    this.loadProducts();
    }

  loadProducts():void {
    this.productService.getProduct().subscribe(
      data => {
        
        this.produdcts = data;
      },
      
      err => { 
        console.log(err);
      }
    );
  }

  delete(id: number):void {
    this.productService.deleteProductById(id).subscribe(
      data => {
        this.toastr.success('removed product','OK',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.loadProducts();
      },
      err => {
        this.toastr.error(err.error.message,'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }
}
