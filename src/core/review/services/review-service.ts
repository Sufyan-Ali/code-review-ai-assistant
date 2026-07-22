import { Injectable } from '@angular/core';
import { ReviewRequest } from '../../../features/review/models/review-request.model';
import { ReviewResult } from '../../../features/review/models/review-result.model';
import { delay, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  RequestCodeReview(request: ReviewRequest):Observable<ReviewResult> {
    let response: ReviewResult = {
      error : ["No Errors"],
      comments : ["No Comments"],
      overallScore: 5
    }
    return of(response).pipe(delay(2000))
  }
}
