import { Component, input } from '@angular/core';
import { ReviewResult } from '../../models/review-result.model';

@Component({
  selector: 'app-review-result-component',
  imports: [],
  templateUrl: './review-result-component.html',
  styleUrl: './review-result-component.css',
})
export class ReviewResultComponent {
  reviewResult = input<ReviewResult|null> (null)
}
