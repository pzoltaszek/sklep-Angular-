import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-dairy-yoghurt',
  templateUrl: './products-dairy-yoghurt.component.html',
  styleUrls: ['./products-dairy-yoghurt.component.css']
})
export class ProductsDairyYoghurtComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) { }

  dairyYoghurtProducts: Product[];
  regular = /^[1-9]$|^[1-9]\d$/;

  ngOnInit() {
    this.getDairyYoghurtProducts();
  }
  getDairyYoghurtProducts(): void {
    this.productService.getDairyYoghurtProducts()
    .subscribe(products => this.dairyYoghurtProducts = products);
  }

  addToActualCart (product: Product) {
    if (!this.amountValidator(product)) {
      this.WrongAmountMessage(product);
      product.amount = 1;
      return;
    }
    let productToSave = new Product(product);
    if(this.doubledValidator(productToSave)) {
      this.cartService.updateCart(productToSave);
      product.amount = 1;
      return;
    }
    else {
      this.cartService.addToCart(productToSave);
      product.amount = 1;
    }
    return;
  }

  plusAmount(product: Product): void {
    ++product.amount;
    if (!(product.amount.toString().match(this.regular))) {
      --product.amount;
      this.WrongAmountMessage(product)
      return;
    }
  }

  minusAmount(product: Product): void {
    --product.amount;
    if (!(product.amount.toString().match(this.regular))) {
      ++product.amount;
      this.WrongAmountMessage(product)
      return;
    } 
  }

  private doubledValidator(product){
    for (let a of this.cartService.actualCart) {
      if (product.id === a.id) {
        return true;
      } 
    }
    return false;
  }

  private amountValidator(product) {
    if (!(product.amount.toString().match(this.regular))) {
      return false;
    }
    else return true;
  }

  private WrongAmountMessage(product) {
    var messageDiv = document.getElementById(`message${product.id}`);
    messageDiv.style.visibility = "visible";
    messageDiv.style.color = "red";
    messageDiv.style.fontWeight = "bold";
setTimeout(function(){
  messageDiv.style.visibility = "hidden";
},1500);
  }

}
