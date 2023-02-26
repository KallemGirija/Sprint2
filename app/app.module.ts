import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';
import { ItemAdminWorkComponent } from './item-admin-work/item-admin-work.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { BillAdminWorkComponent } from './bill-admin-work/bill-admin-work.component';
import { BillViewComponent } from './bill-view/bill-view.component';
import { UserItemViewComponent } from './user-item-view/user-item-view.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { SubmitComponent } from './submit/submit.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewViewComponent } from './review-view/review-view.component';





const allLinks:Routes = [
  {path:'launchrestuarant',component:AdminWorkComponent},
  {path:'restaurants',component:UserComponent},
  {path:'launchitems',component:ItemAdminWorkComponent },
  {path:'viewItems',component:ItemViewComponent },
  {path:'viewBill',component:BillViewComponent},
  {path:'admin/:name',component:AdminWorkComponent},
  {path:'submit',component:SubmitComponent},
  {path:'review',component:ReviewAddComponent},
  {path:'viewItem',component:UserItemViewComponent},  
  {path:'payment',component:PaymentComponent},
  {path:'viewreview',component:ReviewViewComponent}
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    ItemAdminWorkComponent,
    AdminViewComponent,
    ItemViewComponent,
    BillAdminWorkComponent,
    BillViewComponent,
    UserItemViewComponent,
    ReviewAddComponent,
    SubmitComponent,
    PaymentComponent,
    ReviewViewComponent,
    
  
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allLinks),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





