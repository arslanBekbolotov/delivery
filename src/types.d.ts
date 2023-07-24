export interface IDish{
    id:string;
    imageUrl?:string;
    name:string;
    price:string;
}

export type TDishMutation = Omit<IDish, 'id'>