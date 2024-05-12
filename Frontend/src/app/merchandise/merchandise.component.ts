import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent {

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  addToCart(name: string, description: string, price: number) {
    let bodyData = {
      "name": name,
      "description": description,
      "price": price,
    };

    this.http.post("http://localhost:9992/merch/addtocart", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      // Navigate to the main route after adding an item to the cart
      this.router.navigate(['/main']); // Replace 'main' with the actual route of your homepage
    });
  }

}
