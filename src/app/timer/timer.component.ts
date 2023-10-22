import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer: any;

  ngOnInit() {
    // Set the date we're counting down to
    const countDownDate = new Date("oct 29, 2023 23:00:0").getTime();

    // Update the count down every 1 second
    this.timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result
      this.updateTimer(days, hours, minutes, seconds);

      // If the count down is over, clear the interval and show "EXPIRED"
      if (distance < 0) {
        clearInterval(this.timer);
        this.updateTimer(0, 0, 0, 0, 'EXPIRED');
      }
    }, 1000);
  }

  // Helper function to update the timer display
  updateTimer(days: number, hours: number, minutes: number, seconds: number, message: string = ''): void {
    const timerElement = document.getElementById('demo');
    if (timerElement) {
      timerElement.innerHTML = message !== '' ? message : `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }
}



/*for setting the hours remove this comments and put above in comments

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer: any;
  hoursToCountdown: number = 36; // Set the number of hours for the countdown

  ngOnInit() {
    // Calculate the countdown time based on the specified number of hours
    const countDownDate = new Date();
    countDownDate.setHours(countDownDate.getHours() + this.hoursToCountdown);
    const targetTime = countDownDate.getTime();

    // Update the count down every 1 second
    this.timer = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime();

      // Calculate the remaining time
      const distance = targetTime - now;

      // Time calculations for hours, minutes, and seconds
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result
      this.updateTimer(hours, minutes, seconds);

      // If the countdown is over, clear the interval and show "EXPIRED"
      if (distance < 0) {
        clearInterval(this.timer);
        this.updateTimer(0, 0, 0, 'EXPIRED');
      }
    }, 1000);
  }

  // Helper function to update the timer display
  updateTimer(hours: number, minutes: number, seconds: number, message: string = ''): void {
    const timerElement = document.getElementById('demo');
    if (timerElement) {
      timerElement.innerHTML = message !== '' ? message : `${hours}h ${minutes}m ${seconds}s`;
    }
  }
}
*/