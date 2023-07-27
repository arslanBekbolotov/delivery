export interface IDish{
    id:string;
    imageUrl:string;
    name:string;
    price:string;
    count:number;
}

export type TDishMutation = Omit<IDish, 'id'>;

export interface IApiDish {
    [id:string]:TDishMutation;
}

export interface IOrderApiItem {
    [id:string]:number;
}

export interface IOrdersApi{
    [id:string]:IOrderApiItem;
}

export interface IOrderId{
    id:string;
    count:number
}

interface IApiOrdersResponse extends Array<IDish| IOrderId  | null> {}
