import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [
            {id: 1, name: 'mleko UHT 2%', producent: "abc.sp z o.o.", unit: "L", category: "dairy", subcategory:"milk", 
            price: 2.99, description: "Nasze zdrowe polskie mleko, objetosc: 1L", amount: 1},
            {id: 2, name: 'ser zolty gouda' , producent: "abc.sp z o.o.", unit: "szt.", category: "dairy" , subcategory:"milk",
             price: 3.99, description: "Z pelnego mleka, dojrzewajacy 18 miesiecy. Masa: 200g", amount: 1},
            {id: 3, name: 'twarog chudy 2% tluszczu', producent: "Mleczarnia Janek", unit: "szt.", category: "dairy" , subcategory:"cheese", 
            price: 2.39, description: "Chudy twarog z mleka od polskich krow. Masa: 400g", amount: 1},
            {id: 4, name: 'mleko UHT 3,5%', producent: "Mleczarnia Janek", unit: "L", category: "dairy", subcategory:"cheese"
            , price: 2.89, description: "Mleko UHT, pasteryzowane, objetosc: 1L", amount: 1},
            {id: 5, name: 'jogurt naturalny bio', producent: "Bio-Fit", unit: "szt.", category: "dairy", subcategory:"yoghurt",
             price: 0.99, description: "Pyszny jogurt bio, bez laktozy, bez mleka, bez jogurtu. Masa: 180g", amount: 1},
            {id: 6, name: 'jablko', producent: "Sadownik", unit: "kg", category: "fruits & vegetables", subcategory:"fruits",
             price: 1.99, description: "Nasze zdrowe polskie jablka", amount: 1},
            {id: 7, name: 'marchew', producent: "Rolnik", unit: "kg", category: "fruits & vegetables", subcategory:"vegetables",
             price: 0.99, description: "Zdrowa, naddaje sie do robienia sokow", amount: 1},
            {id: 8, name: 'banan', producent: "Colombo", unit: "kg", category: "fruits & vegetables", subcategory:"fruits",
             price: 4.99, description: "Banana pastewny. Kraj pochodzenia: Kolumbia", amount: 1},
            {id: 9, name: 'batat', producent: "Lokalny rolnik", unit: "kg", category: "fruits & vegetables", subcategory:"vegetables",
             price: 4.39, description: "Slodki ziemniak", amount: 1},
            {id: 10, name: 'kapusta', producent: "Rolnik", unit: "kg", category: "fruits & vegetables", subcategory:"vegetables",
             price: 1.59, description: "Kapusta nadaje sie do robienia surowek", amount: 1},
        ];

        const cart = [
            {},
        ];

        return {products, cart};
    }
}