import { Product } from './product';

export class Cart {
    id: number;
    products: Product;

    constructor (products) {
        this.products = products;
    }
}