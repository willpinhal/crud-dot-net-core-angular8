import { Category } from "../category/Category";

export class Device{
    id: number;
    categoryId: number;
    color: string;
    partNumber: number;
    category: Category;
  }