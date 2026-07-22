import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
}
