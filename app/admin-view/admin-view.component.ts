import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantDto } from '../restaurant-dto';
import { RestaurantServiceOperationsService } from '../restaurant-service-operations.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  __restaurantService:RestaurantServiceOperationsService;
  router:Router;

  allRestaurants:RestaurantDto[]=[];
 
  showStatus:boolean=false;

  constructor(restaurantService:RestaurantServiceOperationsService,router:Router){
    this.__restaurantService=restaurantService;
    this.router=router;
  }

  addItem(restaurantId:number)
  {
    localStorage.removeItem('restaurantId');
    localStorage.setItem('restaurantId',restaurantId+'');
    this.router.navigate(['launchitems']);
  }
  

  viewAllRestaurants(){
    this.__restaurantService.getAllRestaurants().subscribe(
       data=>{
        console.log("data:-"+data);
        this.allRestaurants=data;
        
       },err=>{
        console.log("error from spring",err);
        
       }
    )
  }

}