import { effect, Injectable, signal } from '@angular/core';
import { ReviewResult } from '../../../features/review/models/review-result.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewStateService {
  currentReview = signal<ReviewResult | null>(null)
  reviewHistory = signal<ReviewResult[]>([])
  constructor() {
    // this.retrieveReviews()
    // this.saveReviews()
  }
  addNewReview(review: ReviewResult) {
    const prevReview = this.currentReview()
    if (prevReview) {
      this.reviewHistory.update(curr => [...curr, prevReview])
    }
    this.currentReview.set(review)
  }
  handleResolveIssue(id: string) {
    const currentReview = this.currentReview();
    if (currentReview === null) {
      return;
    }
    const editedReview: ReviewResult = {
      ...currentReview,
      issues: currentReview.issues.map(issue => {
        if (issue.id === id) return {
          ...issue,
          resolved: true
        }
        return issue
      })
    }
    this.currentReview.set(editedReview)
  }
  retrieveReviews(){
    const currentReview = localStorage.getItem("currentReview")
    const reviewHistory = localStorage.getItem("reviewHistory")

    if(!currentReview || !reviewHistory){
      return
    }
    this.currentReview.set(JSON.parse(currentReview))
    this.reviewHistory.set(JSON.parse(reviewHistory))
  }
  saveReviews(){
    effect(() => {
      const review = this.currentReview()
      const reviewHistory = this.reviewHistory()
      if (!review) {
        localStorage.removeItem('currentReview');
        return
      }
      localStorage.setItem("currentReview", JSON.stringify(review))
      localStorage.setItem("reviewHistory", JSON.stringify(reviewHistory))
      console.log("effect Service")
    })
  }
}
