import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';  // Import HttpClient here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { BookingComponent } from './booking/booking.component';
import { FoodComponent } from './food/food.component';
import { ChatComponent } from './chat/chat.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { PredictComponent } from './predict/predict.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MerchandiseComponent,
    BookingComponent,
    FoodComponent,
    ChatComponent,
    ScoreboardComponent,
    MainComponent,
    RegisterComponent,
    ContactComponent,
    PredictComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    // Provide services here if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
