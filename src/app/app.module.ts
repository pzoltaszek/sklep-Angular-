import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ProductSearchComponent } from './product-search/product-search.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsDairyComponent } from './products-dairy/products-dairy.component';
import { ProductsDairyMilkComponent } from './products-dairy-milk/products-dairy-milk.component';
import { ProductsDairyCheeseComponent } from './products-dairy-cheese/products-dairy-cheese.component';
import { ProductsDairyYoghurtComponent } from './products-dairy-yoghurt/products-dairy-yoghurt.component';
import { FruitsComponent } from './products-fruits/fruits.component';
import { FruitsAndVegetablesComponent } from './products-fruits-and-vegetables/fruits-and-vegetables.component';
import { ProductsVegetablesComponent } from './products-vegetables/products-vegetables.component';
import { CartComponent } from './cart/cart.component';
import { ProductsManageComponent } from './products-manage/products-manage.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    DashboardComponent,
    ProductSearchComponent,
    MenuComponent,
    ProductsDairyComponent,
    ProductsDairyMilkComponent,
    ProductsDairyCheeseComponent,
    ProductsDairyYoghurtComponent,
    FruitsComponent,
    FruitsAndVegetablesComponent,
    ProductsVegetablesComponent,
    CartComponent,
    ProductsManageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
