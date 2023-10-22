import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsignupComponent } from './teamsignup/teamsignup.component';
import { MentorregistrationComponent } from './mentorregistration/mentorregistration.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import { VotesComponent } from './votes/votes.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [

  {path:'teamregistration',component:TeamsignupComponent},
  {path:'mentorregistration',component:MentorregistrationComponent},
  {path:'',component:HomeComponent},
  {path:'chat',component:ChatboxComponent},
  {path:'checkpoint',component:CheckpointComponent},
  {path:'votes',component:VotesComponent},
  {path:'review',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
