import { Component, computed, inject } from '@angular/core';
import { StatsSummaryComponents } from '../../features/dashboard/stats-summary-components/stats-summary-components';
import { ReviewStateService } from '../../core/review/services/review-state-service';

@Component({
  selector: 'app-dashboard-page',
  imports: [StatsSummaryComponents],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  state = inject(ReviewStateService)
  currentReview = this.state.currentReview
  reviewHistory = this.state.reviewHistory
  reviewStats = computed(() => {
    const currentReview = this.currentReview()
    const reviewHistory = this.reviewHistory()
    const allReviews = currentReview ? [...reviewHistory, currentReview] : reviewHistory
    let stats = {
      totalReviews: allReviews.length,
      totalOpenIssues: allReviews.reduce((total, currentValue) => total + currentValue.issues.filter(issue => !issue.resolved).length, 0),
      avgOverallScore: (allReviews.reduce((total, currentValue) => (total + currentValue.overallScore), 0))/allReviews.length ,
      severityStats: {
        high: allReviews.reduce((total, currentValue) => total + currentValue.issues.filter(issue => issue.severity === 'high').length, 0),
        medium: allReviews.reduce((total, currentValue) => total + currentValue.issues.filter(issue => issue.severity === 'medium').length, 0),
        low: allReviews.reduce((total, currentValue) => total + currentValue.issues.filter(issue => issue.severity === 'low').length, 0)
      }
    }
    return stats

  })
}
