import { Component,input, output } from '@angular/core';
import { Issue } from '../../models/issue.model';
import { IssueCardComponent } from '../issue-card-component/issue-card-component';

@Component({
  selector: 'app-issue-list-component',
  imports: [IssueCardComponent],
  templateUrl: './issue-list-component.html',
  styleUrl: './issue-list-component.css',
})
export class IssueListComponent {
 issuesList = input<Issue[]>([])
 resolveClicked = output<string>()
 
}
