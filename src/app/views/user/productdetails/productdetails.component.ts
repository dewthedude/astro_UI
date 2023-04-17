import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
  constructor() { }
 countValue:number=1 
  ngOnInit(): void {
  }

  countM(){
    this.countValue-=1


  }
  countP(){
    this.countValue+=1

  }
}
