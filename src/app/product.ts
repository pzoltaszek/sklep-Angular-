export class Product {
    id: number;
    name: string;
    producent: string;
    unit: string;
    category: string;
    subcategory: string;
    price: number;
    description: string;
    amount: number;

    constructor (product) {
        this.id = product.id;
        this.name = product.name;
        this.producent = product.producent;
        this.unit = product.unit;
        this.category = product.category;
        this.subcategory = product.subcategory;
        this.price = product.price;
        this.description = product.description;
        this.amount = product.amount;
    }
}