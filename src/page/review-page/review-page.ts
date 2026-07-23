import { Component, inject, signal, } from '@angular/core';
import { CodeInputComponent } from '../../features/review/components/code-input-component/code-input-component';
import { ReviewRequest } from '../../features/review/models/review-request.model';
import { ReviewService } from '../../core/review/services/review-service';
import { ReviewResultComponent } from '../../features/review/components/review-result-component/review-result-component';
import { ReviewResult } from '../../features/review/models/review-result.model';
@Component({
  selector: 'app-review-page',
  imports: [CodeInputComponent, ReviewResultComponent],
  templateUrl: './review-page.html',
  styleUrl: './review-page.css',
})
export class ReviewPage {
  private rs = inject(ReviewService)
  reviewResult = signal<ReviewResult | null>(null)
  loading = signal(false)

  handleReviewRequest(submittedData: ReviewRequest) {
    this.loading.set(true)
    this.rs.RequestCodeReview(submittedData).subscribe(res => {
      this.reviewResult.set(res)
      this.loading.set(false)
      console.log(this?.reviewResult())
    })
  }
  handleResolveClick(id: string) {
    const currentResult = this.reviewResult();
    if (currentResult === null) {
      return;
    }
    let newReviewResult: ReviewResult = {
      ...currentResult,
      issues: currentResult.issues.map(issue => {
        if (issue.id === id) {
          issue.resolved = true
        }
        return issue
      })
    }
    this.reviewResult.set(newReviewResult)
  }
}
