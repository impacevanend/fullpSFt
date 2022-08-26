import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
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
        this.ToReturn();
      }
    );
  }

  
ToReturn():void{
  this.router.navigate(['/']);
}

}
