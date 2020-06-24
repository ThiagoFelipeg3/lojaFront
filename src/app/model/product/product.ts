import { Brand } from './brand';
import { Image } from './image';

export class Product {
    id: number;
    name: string;
    description: string;
    new_product: number;
    price: number;
    price_from: number;
    rating: number;
    bestseller: number;
    sale: number;
    featured: number;
    stock: number
    brand: Brand;
    imagens: Image[]; 
}
