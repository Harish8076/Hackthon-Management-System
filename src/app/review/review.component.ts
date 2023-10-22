import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  selectedRating = 0;
  judgeName: string = '';
  reviewText: string = '';
  suggestions: string = '';

  onStarClick(rating: number): void {
    this.selectedRating = rating;
  }

  onSubmit(): void {
    if (!this.judgeName || !this.reviewText || this.selectedRating === 0) {
      alert('Judge Name, Review, and Rating are required fields.');
      return;
    }

    const reviewData = {
      judgeName: this.judgeName,
      reviewText: this.reviewText,
      suggestions: this.suggestions,
      rating: this.selectedRating
    };

    // TODO: Send reviewData to the server or handle it as needed
    console.log('Submitted Review Data:', reviewData);
  }
}
