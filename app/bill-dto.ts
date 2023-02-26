export class BillDTO 
{
   billId:number;
   restaurantName:String;
   itemCount:number;
   totalAmount:number;
   gstAmount:number;
       
    constructor(
       billId:number,
       restaurantName:String,
       itemCount:number,
       totalAmount:number,
       gstAmount:number,    
      
  ){      
   this.billId=billId;
   this.restaurantName=restaurantName;
   this.itemCount=itemCount;
   this.totalAmount=totalAmount;
   this.gstAmount=gstAmount;
   
  }
}