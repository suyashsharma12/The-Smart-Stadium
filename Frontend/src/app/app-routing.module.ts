import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ChatComponent } from './chat/chat.component';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  {path:'booking',component:BookingComponent},
  {path:'chat',component:ChatComponent},
  {path:'food',component:FoodComponent},
  {path:'login',component:LoginComponent},
  {path:'merchandise',component:MerchandiseComponent},
  {path:'scoreboard',component:ScoreboardComponent},
  {path:'main',component:MainComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'predict',component:PredictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
