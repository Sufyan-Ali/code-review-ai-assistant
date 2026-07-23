import { Component, computed, input, output, signal } from '@angular/core';
import { ReviewResult } from '../../models/review-result.model';
import { IssueListComponent } from '../issue-list-component/issue-list-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-result-component',
  imports: [IssueListComponent,FormsModule],
  templateUrl: './review-result-component.html',
  styleUrl: './review-result-component.css',
})
export class ReviewResultComponent {
  reviewResult = input<ReviewResult | null>(null)
  resolveClicked = output<string>()
  selectedFilter = signal<'all' | 'open' | 'resolved'>('all')
  issuesCount = computed(()=>{
    const issues = this.reviewResult()?.issues ?? []
    const count = {
      all: issues.length,
      open: issues.filter(issue => !issue.resolved).length,
      resolved: issues.filter(issue => issue.resolved).length
    }
    return count
  })
  filteredIssues = computed(() => {
    const filter = this.selectedFilter()
    const result = this.reviewResult()
    let issues = result?.issues
    if (filter === 'open') {
      issues = result?.issues.filter(issue => !issue.resolved)
    }
    if (filter === 'resolved') {
      issues = result?.issues.filter(issue => issue.resolved)
    }
    return issues
  })

}
