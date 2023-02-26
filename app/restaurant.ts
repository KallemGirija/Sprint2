export class Restaurant 
{
    restaurantId:number;
    restaurantName:string;
    managerName:string;
   contactNumber:string;
    buildingName:string;
    area:string;
   streetNo:string;
   city:string;
   state:string;
  country:string;
  pincode:string;
  imageName:string
 

   constructor( restaurantId:number, restaurantName:string,
       managerName:string,
      contactNumber:string,
       buildingName:string,
       area:string,
      streetNo:string,
      city:string,
      state:string,
      country:string,
      pincode:string,
      imageName:string
      ){
       this.restaurantId=restaurantId;
       this.restaurantName=restaurantName;
       this.managerName=managerName;
       this.contactNumber=contactNumber;
       this.buildingName=buildingName;
       this.area=area;
       this.streetNo=streetNo;
       this.city=city;
       this.state=state;
       this.country=country;
       this.pincode=pincode;
      this.imageName=imageName;

      }
}
