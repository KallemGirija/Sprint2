import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Bill } from '../bill';
import { BillDTO } from '../bill-dto';
import { BillOperationsService } from '../bill-operations.service';

@Component({
  selector: 'app-bill-admin-work',
  templateUrl: './bill-admin-work.component.html',
  styleUrls: ['./bill-admin-work.component.css']
})
export class BillAdminWorkComponent {
  __billService: BillOperationsService;
  status = false;
  message = '';
  b:Bill  = new Bill(0,'',0,0,0);
  b1:BillDTO[] =[]; 

  

  constructor(billService: BillOperationsService,private http:HttpClient) {
    this.__billService = billService;
  }

  onSubmitBill() {
    console.log(this.b);
    this.__billService.submitBill(this.b).subscribe(

      data=>{
        this.status=true;
        this.message="Bills submitted";

      },
      error=>{

      }

    )
  
  }

}