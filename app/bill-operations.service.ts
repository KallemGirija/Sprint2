import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';
import { BillDTO } from './bill-dto';

@Injectable({
  providedIn: 'root'
})
export class BillOperationsService {

  constructor(private http:HttpClient) { }
  baseURL:string = 'http://localhost:2003';
  submitBillEndPoint:string=this.baseURL+'/bill/register';
  getAllBillsEndPoint:string=this.baseURL+'/bill/list';
  
  
  getBillArr(){
  return[];
  }

  submitBill(bill:Bill):Observable<Bill>{
    console.log("inside the method :"+bill);

    return this.http.post<Bill>(`${this.submitBillEndPoint}`,bill);
  }

  getAllBills():Observable<BillDTO[]>{
    console.log("inside get method 1 :Bill "+this.getAllBillsEndPoint);
    return this.http.get<BillDTO[]>(`${this.getAllBillsEndPoint}`);

  }
}