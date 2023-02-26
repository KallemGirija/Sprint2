import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill';
import { BillDTO } from '../bill-dto';
import { BillOperationsService } from '../bill-operations.service';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent {

  __billService:BillOperationsService;
  router:Router;

  allBills:Array<Bill>=[];
  bills:BillDTO[]=[];
  
  
  constructor(billService:BillOperationsService,router:Router){
    this.__billService=billService;
    this.allBills=this.__billService.getBillArr();
    this.router=router;
  }

  viewAllBills(){
    this.__billService.getAllBills().subscribe(
      data=>{
        console.log("data:-"+data);
        this.bills=data;
      },err=>{
        console.log("error from spring",err);
      }
    )
}

}
