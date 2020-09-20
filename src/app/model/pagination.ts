import { Product } from './product';

export abstract class Pagination<T> {
    current_page: number;
    data: any[T];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: 8;
}
