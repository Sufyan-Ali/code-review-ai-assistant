import { Component, inject, signal, } from '@angular/core';
import { CodeInputComponent } from '../../features/review/components/code-input-component/code-input-component';
import { ReviewRequest } from '../../features/review/models/review-request.model';
import { ReviewService } from '../../core/review/services/review-service';
import { ReviewResultComponent } from '../../features/review/components/review-result-component/review-result-component';
import { ReviewResult } from '../../features/review/models/review-result.model';
@Component({
  selector: 'app-review-page',
  imports: [CodeInputComponent,ReviewResultComponent],
  templateUrl: './review-page.html',
  styleUrl: './review-page.css',
})
export class ReviewPage {
  private rs = inject(ReviewService)
  reviewResult: ReviewResult = {error: [],comments: [],overallScore : 0}
  loading  = signal(false)

  handleReviewRequest(reviewData: ReviewRequest) {
    this.loading.set(true)
    this.rs.RequestCodeReview(reviewData).subscribe(res => {this.reviewResult = res
      this.loading.set(false)
    })
    console.log(this?.reviewResult)
  }
}
