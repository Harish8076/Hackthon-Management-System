import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsignupComponent } from './teamsignup/teamsignup.component';
import { MentorregistrationComponent } from './mentorregistration/mentorregistration.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { FooterComponent } from './footer/footer.component';
import { Head1Component } from './head1/head1.component';
import { TimerComponent } from './timer/timer.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import { VotesComponent } from './votes/votes.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsignupComponent,
    MentorregistrationComponent,
    HomeComponent,
    ImageSliderComponent,
    ChatboxComponent,
    FooterComponent,
    Head1Component,
    TimerComponent,
    CheckpointComponent,
    VotesComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
