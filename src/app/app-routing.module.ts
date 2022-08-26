import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductComponent } from './product/detail-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { GetProductComponent } from './product/get-product.component';
import { NewProductComponent } from './product/new-product.component';




const routes: Routes = [
  {path: '', component:GetProductComponent},
  {path: 'detail/:id', component:DetailProductComponent},
  {path: 'new', component:NewProductComponent},
  {path: 'edit/:id', component:EditProductComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
