import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Add headers if needed

    this.http.post("http://localhost:9992/student/login", bodyData, { headers }).subscribe(
      (resultData: any) => {
        console.log(resultData);

        if (resultData.status) {
          // Navigate to the homepage after successful login
          this.router.navigateByUrl('/main'); // Replace 'main' with the actual route of your homepage
        } else {
        
          console.error("Error login", resultData.error); // Log the error
          alert("Invalid credentials"); // Show an alert to the user
        }
      },
      (error) => {
        console.error("Error during login", error); // Log any HTTP request error
      
      }
    );
  }
}
