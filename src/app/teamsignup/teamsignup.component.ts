import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamsignup',
  templateUrl: './teamsignup.component.html',
  styleUrls: ['./teamsignup.component.css']
})
export class TeamsignupComponent implements OnInit {
  numberOfFields: string = '';
  inputFields: string[] = [];

  ngOnInit(): void {
    alert('Welcome To Team Registration Pge'); // Display an alert every time the component is initialized
    this.generateInputFields(); // Call the function to generate input fields
  }

  generateInputFields(): void {
    const numberOfFieldsInt = parseInt(this.numberOfFields) || 1;
    this.inputFields = Array(numberOfFieldsInt).fill('').map((_, index) => `Student ${index + 1}`);
  }
}
