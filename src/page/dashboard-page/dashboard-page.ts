import { Component, computed, inject } from '@angular/core';
import { StatsSummaryComponents } from '../../features/dashboard/stats-summary-components/stats-summary-components';
import { ReviewStateService } from '../../core/review/services/review-state-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  imports: [StatsSummaryComponents],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  state = inject(ReviewStateService)
  reviewStats = computed(() => {
    let stats = {
      totalReviews: 0,
      avgOverallScore: 0,
      totalOpenIssues: 0,
      severityStats: {
        high: 0,
        medium: 0,
        low: 0
      }
    }
    if (this.state.currentReview()) {
      stats.totalReviews = this.state.reviewHistory().length + 1
      stats.totalOpenIssues = this.state.reviewHistory().reduce((total, currentValue) => total + currentValue.issues.filter(issue => !issue.resolved).length, 0)
      console.log("condition");
    }
    return stats
  })
  countOpenIssues(currentReview: boolean) {
    let count
    if (currentReview) {

    }
    return count
  }
}
