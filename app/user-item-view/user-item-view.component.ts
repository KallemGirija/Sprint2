import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill';
import { BillOperationsService } from '../bill-operations.service';
import { Item } from '../item';
import { ItemDTO } from '../item-dto';
import { ItemOperationsService } from '../item-operations-service.service';

@Component({
  selector: 'app-user-item-view',
  templateUrl: './user-item-view.component.html',
  styleUrls: ['./user-item-view.component.css']
})
export class UserItemViewComponent {
  __itemService: ItemOperationsService;
 
  status = false;
  message = '';
  router: Router;
  List : Array<ItemDTO> = [];
  listCount:string='' ;
  name:string='';
  cost:number=0;
  gst:number=0;
  total:number=0;
  __billService: BillOperationsService;
  b:Bill  = new Bill(0,'',0,0,0);
  

  items: ItemDTO[] = [];
  constructor(itemService: ItemOperationsService, router: Router, __billService: BillOperationsService) {
    this.__itemService = itemService;
    this.__billService=__billService;
  
    this.router = router;
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



  addToCart(item:string)
  {

    this.listCount = item;   
    
  }

  payment(item:string){
    this.cost=parseInt(item);
    this.gst=(this.cost)*0.10;
    this.total=this.gst+this.cost;


  }
  
  onSubmitBill(){
    this.__billService.submitBill(this.b).subscribe(

      data=>{
        this.status=true;
        this.message="Bills submitted";

      },
      error=>{

      }

    )

  }

  proceedToPay()
  {
    
    this.router.navigate(['/payment']);
  }



}