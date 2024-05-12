import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  name: string = "";
  email: string = "";
  date: string = "";
  seat: number = 0;
  flag: Boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  book() {
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "date": this.date,
      "seat": this.seat,
      "flag": this.flag
    };

    this.http.post("http://localhost:9992/booking/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      // Navigate to the main page after successful booking
      this.router.navigateByUrl('/main'); // Replace 'main' with the actual route of your homepage
    });
  }

  save() {
    this.book();
  }

}
