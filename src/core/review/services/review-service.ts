import { Injectable } from '@angular/core';
import { ReviewRequest } from '../../../features/review/models/review-request.model';
import { ReviewResult } from '../../../features/review/models/review-result.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  RequestCodeReview(request: ReviewRequest): Observable<ReviewResult> {
    let response: ReviewResult = {
      issues: [{
        id: "1",
        title: "a",
        description: "sb",
        severity: "high",
        lineNumber: 1,
        suggestion: "none",
        category: "error",
        resolved: false
      }, {
        id: "2",
        title: "asd",
        description: "v",
        severity: "low",
        lineNumber: 6,
        suggestion: "alot",
        category: "better",
        resolved: false
      }, {
        id: "3",
        title: "a",
        description: "sb",
        severity: "high",
        lineNumber: 1,
        suggestion: "none",
        category: "optimization",
        resolved: false

      }],
      comments: ["No Comments"],
      overallScore: 5
    }
    return of(response).pipe(delay(2000))
  }
}
