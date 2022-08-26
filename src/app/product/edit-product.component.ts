import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;

  constructor(
    private productService:ProductService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params.id;
    this.productService.getProductById(id).subscribe(
      data => {
        this.product = data;
      }, err => {
        this.toastr.error(err.error.message,'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate():void {
    const id = this.activateRoute.snapshot.params.id; 
    this.productService.updateProduc(id, this.product).subscribe(
      data => {
        this.toastr.success('updated product','OK',{
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
