export class Bill{
billId:number;
restaurantName:String;
itemCount:number;
grossBillAmount:number;
gstAmount:number;

constructor(
   
   billId:number,
   restaurantName:String,
   itemCount:number,
   grossBillAmount:number,
   gstAmount:number,
   
){
  
   this.billId=billId;
   this.restaurantName=restaurantName;
   this.itemCount=itemCount;
   this.grossBillAmount=grossBillAmount;
   this.gstAmount=gstAmount;
}
}