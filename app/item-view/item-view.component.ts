import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill';
import { Item } from '../item';
import { ItemDTO } from '../item-dto';
import { ItemOperationsService } from '../item-operations-service.service';
@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent {
  __itemService: ItemOperationsService;
  router: Router;

  allItems: Array<Item> = [];
  items: ItemDTO[] = [];
  bills: Bill[] = [];

  status = false;
  message = '';

  itemId:string='';
  restaurantId:string='';

  constructor(itemService: ItemOperationsService, router: Router) {
    this.__itemService = itemService;
    this.allItems = this.__itemService.getItemArr();
    this.restaurantId  =  localStorage.getItem('restaurantId') || '';
    this.itemId=localStorage.getItem('itemId')||'';
    this.router = router;
  }

  addItem(itemId:number)
  {
    localStorage.removeItem('itemId');
    localStorage.setItem('itemId',itemId+'');
    this.router.navigate(['launchitems']);
  }

  viewAllItems() {
    this.__itemService.getAllItems().subscribe(
      data => {
        console.log("data:-" + data);
        this.items = data;

      }, err => {
        console.log("error from spring", err);

      }
    )
  }

  onUpdate(){
    this.__itemService. UpdateRestaurantWithItem(this.itemId,this.restaurantId).subscribe(
      
    
      data=>{
        this.status=true;
        this.message="Items updated";

      },
      error=>{

      }

    )
  
  
  }

  AddToCart() {


  }

}