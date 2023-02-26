export class Item
 {

    itemId:number;
    itemName:string;
	 category:string;
	 cost:number;
     imageName:string;

     constructor(
      itemId:number,
        itemName:string,
        category:string,
        cost:number,
        imageName:string
     )
     {  this.itemId=itemId;
        this.itemName=itemName;
        this.category=category;
        this.cost=cost;
        this.imageName=imageName;
     }
}
