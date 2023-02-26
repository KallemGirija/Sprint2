import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../review';
import { ReviewOperationsService } from '../review-operations.service';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent {
  model:Review = new Review(0,'','','',0,0);
  submitted = false;
  success = false;
  error = false;
  numberOfStars = [1,2,3,4,5];
  status = false;
  message = '';
  router:Router;
 
  constructor(private ReviewOperationsService:ReviewOperationsService, router:Router) {
    this.router=router;
  }

  onSubmit() {
    console.log(this.model);
    
    this.ReviewOperationsService.submitReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="flight review submitted";

      },
      error=>{

      }

    )
    
    this.router.navigate(['/submit']);
    
    
    }

}
