import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  orderSuccessMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  addToCart(name: string, description: string, price: number) {
    let bodyData = {
      "name": name,
      "description": description,
      "price": price,
    };

    this.http.post("http://localhost:9992/food/addtocart", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      // Set the success message
      this.orderSuccessMessage = "Order booked successfully";

      this.router.navigateByUrl('/main'); 
    });
  }
}
