import { Component, inject, signal, } from '@angular/core';
import { CodeInputComponent } from '../../features/review/components/code-input-component/code-input-component';
import { ReviewRequest } from '../../features/review/models/review-request.model';
import { ReviewService } from '../../core/review/services/review-service';
import { ReviewResultComponent } from '../../features/review/components/review-result-component/review-result-component';
import { ReviewResult } from '../../features/review/models/review-result.model';
import { ReviewStateService } from '../../core/review/services/review-state-service';
import { LoadingComponent } from "../../shared/loading-component/loading-component";

@Component({
  selector: 'app-review-page',
  imports: [CodeInputComponent, ReviewResultComponent, LoadingComponent],
  templateUrl: './review-page.html',
  styleUrl: './review-page.css',
})
export class ReviewPage {
  private rs = inject(ReviewService)
  private state = inject(ReviewStateService)
  reviewResult = signal<ReviewResult | null>(null)
  loading = signal(false)

  handleReviewRequest(submittedData: ReviewRequest) {
    this.loading.set(true)
    this.rs.RequestCodeReview(submittedData).subscribe(res => {
      this.reviewResult.set(res)
      this.loading.set(false)
      this.state.addNewReview(res)
    })
  }
  handleResolveClick(id: string) {
    this.state.handleResolveIssue(id)
    this.reviewResult.set(this.state.currentReview())
  }
}
