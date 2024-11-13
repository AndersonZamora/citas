import { ICategory } from './ICategory';

export interface IService {
    _id?: string;
    title: string;
    slug: string;
    price: number;
    reser: number;
    description: string;
    category: ICategory;
    estado: boolean;
    createdAt?: string;
    updatedAt?: string;
}
