export class RestaurantDto 
{
    restaurantId:number;
    restaurantName:string;
    restaurantContactNumber:string;
    city:string;
	state:string;
    imageName:string;
    

   constructor( restaurantId:number, restaurantName:string,
    restaurantContactNumber:string,city:string,
	state:string, imageName:string,
       ){
       
        this.restaurantId=restaurantId;
       this.restaurantName=restaurantName;
       this.restaurantContactNumber=restaurantContactNumber;
       this.city=city;
       this.state=state;
       this.imageName=imageName;

      }

}
