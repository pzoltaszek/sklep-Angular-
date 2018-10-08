import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsDairyComponent } from './products-dairy/products-dairy.component';
import { ProductsDairyMilkComponent } from './products-dairy-milk/products-dairy-milk.component';
import { ProductsDairyCheeseComponent } from './products-dairy-cheese/products-dairy-cheese.component';
import { ProductsDairyYoghurtComponent } from './products-dairy-yoghurt/products-dairy-yoghurt.component';
import { FruitsAndVegetablesComponent } from './products-fruits-and-vegetables/fruits-and-vegetables.component';
import { FruitsComponent } from './products-fruits/fruits.component';
import { ProductsVegetablesComponent } from './products-vegetables/products-vegetables.component';
import { CartComponent } from './cart/cart.component';
import { ProductsManageComponent } from './products-manage/products-manage.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'dairy', component: ProductsDairyComponent },
  { path: 'dairy/milk', component: ProductsDairyMilkComponent },
  { path: 'dairy/cheese', component: ProductsDairyCheeseComponent },
  { path: 'dairy/yoghurt', component: ProductsDairyYoghurtComponent },
  { path: 'fruitsAndVegetables', component: FruitsAndVegetablesComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'vegetables', component: ProductsVegetablesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'productsManage', component: ProductsManageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
  
 }
