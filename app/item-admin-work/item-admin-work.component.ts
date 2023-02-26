import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemDTO } from '../item-dto';
import { ItemOperationsService } from '../item-operations-service.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-item-admin-work',
  templateUrl: './item-admin-work.component.html',
  styleUrls: ['./item-admin-work.component.css']
})
export class ItemAdminWorkComponent {

  __itemService: ItemOperationsService;
  status = false;
  message = '';
  i:Item  = new Item(0,'','',0,'');
  
  itemId:string='';
  restaurantId:string='';


  constructor(itemService: ItemOperationsService,private http:HttpClient) {
    this.__itemService = itemService;
  this.restaurantId  =  localStorage.getItem('restaurantId') || '';
  this.itemId=localStorage.getItem('itemId')||'';
    console.log(this.restaurantId);
  }

  onSubmitItem() {
   
    console.log(this.i);
   
    
    this.__itemService.submitItem(this.i).subscribe(
      
    
      data=>{
        this.status=true;
        this.message="Items submitted";

      },
      error=>{

      }

    )
  }

 
 
 

}