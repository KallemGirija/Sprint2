import { Item } from "./item";
export class Cart {

    item:Item[];

    constructor(item:Item[]){
        this.item=item;
    }
}