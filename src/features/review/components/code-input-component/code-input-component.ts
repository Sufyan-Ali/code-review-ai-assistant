import { Component,output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReviewRequest } from '../../models/review-request.model';

@Component({
  selector: 'app-code-input-component',
  imports: [FormsModule],
  templateUrl: './code-input-component.html',
  styleUrl: './code-input-component.css',
})
export class CodeInputComponent {
  selectedLanguage: string = ""
  selectedReviewFocus: string = ""
  enteredCode: string = ""
  submittedData :ReviewRequest  = {
      "language" : "",
      "reviewFocus" : "",
      "code" : ""
  }
  reviewSubmitted = output<ReviewRequest>()

  submitReview() {
    this.submittedData = {
      "language" : this.selectedLanguage,
      "reviewFocus" : this.selectedReviewFocus,
      "code" : this.enteredCode
    }
    this.reviewSubmitted.emit(this.submittedData)
  }
}
