import { Component } from '@angular/core';
import { CodeInputComponent } from '../../features/review/components/code-input-component/code-input-component';

@Component({
  selector: 'app-review-page',
  imports: [CodeInputComponent],
  templateUrl: './review-page.html',
  styleUrl: './review-page.css',
})
export class ReviewPage {

}
