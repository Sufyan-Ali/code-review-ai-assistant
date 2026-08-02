import { Injectable, signal } from '@angular/core';
import { ReviewResult } from '../../../features/review/models/review-result.model';
import { ReviewHistoryElement } from '../../../features/review/models/review-history-element';
import { ReviewRequest } from '../../../features/review/models/review-request.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewStateService {
  currentReview = signal<ReviewResult | null>(null)
  reviewHistory = signal<ReviewResult[]>([])

  addNewReview(review: ReviewResult){
    const prevReview = this.currentReview()
    if(prevReview){
      this.reviewHistory.update(curr => [...curr,prevReview])
    }
    this.currentReview.set(review)
  }
}
