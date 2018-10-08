import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  sum: number = 0;
  actualCart: Product[]=[];

  ngOnInit() {
    this.getActualCart();
  }

  getActualCart() {
    this.actualCart = this.cartService.getActualCart();
    this.sum = this.cartService.getSum();
  }

  plusAmount(product: Product): void {
    ++product.amount;
    this.sum = this.sum + product.price;
  }

  minusAmount(product: Product): void {
    --product.amount;
    this.sum = this.sum - product.price;
  }

  removeFromCart(product: Product): void {
    var index = this.actualCart.indexOf(product);
    this.cartService.actualCart.splice(index,1);
    this.actualCart = this.cartService.getActualCart();
    this.sum = this.cartService.getSum();
  }
}
