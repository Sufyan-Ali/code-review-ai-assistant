import { Component, input, output } from '@angular/core';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-issue-card-component',
  imports: [],
  templateUrl: './issue-card-component.html',
  styleUrl: './issue-card-component.css',
})
export class IssueCardComponent {
  issue = input.required<Issue>()
  resolveClicked = output<string>()
}
