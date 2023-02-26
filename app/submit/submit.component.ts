import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {


  router:Router;

  constructor( router:Router){
    
    this.router=router;
  }

  back()
  {
    
    this.router.navigate(['/restaurants']);
  }

}
