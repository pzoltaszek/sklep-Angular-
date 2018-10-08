import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  regular = /^[1-9]$|^[1-9]\d$/;
  
  @Input() product: Product;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

getProduct(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.productService.getProduct(id).subscribe(product => this.product = product);
}

goBack():void {
  this.location.back();
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
