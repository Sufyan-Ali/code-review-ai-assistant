import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewRequest } from '../../models/review-request.model';

@Component({
  selector: 'app-code-input-component',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './code-input-component.html',
  styleUrl: './code-input-component.css',
})
export class CodeInputComponent {
  private fb = inject(FormBuilder)
  // selectedLanguage: string = ""
  // selectedReviewFocus: string = ""
  // enteredCode: string = ""
  data = this.fb.group({
    "language": [,Validators.required],
    "reviewFocus": [""],
    "code": [""]
  })
  submittedData: ReviewRequest = {
    "language": "",
    "reviewFocus": "",
    "code": ""
  }  
  reviewSubmitted = output<ReviewRequest>()

  submitReview() {
    this.submittedData = {
      "language": this.data.value.language ??"",
      "reviewFocus": this.data.value.reviewFocus ?? "",
      "code": this.data.value.code ?? ""
    }
    console.log(this.data.value,this.data.valid,"asdjf");
    this.reviewSubmitted.emit(this.submittedData) 
  }
}
