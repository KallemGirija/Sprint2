import { Component } from '@angular/core';
import { ReviewDTO } from '../review-dto';
import { ReviewOperationsService } from '../review-operations.service';
@Component({
  selector: 'app-review-view',
  templateUrl: './review-view.component.html',
  styleUrls: ['./review-view.component.css']
})
export class ReviewViewComponent {

  __ReviewService:ReviewOperationsService;
  review:ReviewDTO[]=[];
  id2:number=0;

  constructor(__ReviewService:ReviewOperationsService){
    this.__ReviewService=__ReviewService;
  }

  viewAllRestuarantsByName(id:string){
    
    this.id2=1;
    this.__ReviewService.getReviewByRestaurantId(this.id2).subscribe(
      data=>{
       console.log("data:-"+data);
       this.review=data;
       
      },err=>{
       console.log("error from spring",err);
       
      }
   )
 
    }
}
