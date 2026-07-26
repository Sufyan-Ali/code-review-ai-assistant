import { Injectable, signal } from '@angular/core';
import { ReviewResult } from '../../../features/review/models/review-result.model';
import { ReviewHistoryElement } from '../../../features/review/models/review-history-element';

@Injectable({
  providedIn: 'root',
})
export class ReviewStateService {
  currentReview = signal<ReviewResult | null>(null)
  reviewHistory = signal<ReviewHistoryElement[]>([])
  private nextId = 0

  addReview(lang: string,code: string,reviewResult: ReviewResult){
    this.currentReview.set(reviewResult)
    const element: ReviewHistoryElement = {
      id: this.nextId,
      date: new Date(),
      language: lang,
      code: code,
      reviewResult: reviewResult,
    }
    this.reviewHistory.update(currentHistory => [...currentHistory,element])
    this.nextId++
  }
}
