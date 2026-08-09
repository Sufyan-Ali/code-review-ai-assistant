import { Component, input, output } from '@angular/core';
import { Issue } from '../../models/issue.model';
import { BadgeComponent } from "../../../../shared/badge-component/badge-component";

@Component({
  selector: 'app-issue-card-component',
  imports: [BadgeComponent],
  templateUrl: './issue-card-component.html',
  styleUrl: './issue-card-component.css',
})
export class IssueCardComponent {
  issue = input.required<Issue>()
  resolveClicked = output<string>()
}
