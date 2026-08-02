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
    const currentReview = this.state.currentReview()
    const reviewHistory = this.state.reviewHistory()
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
    if (currentReview) {
      stats.totalReviews = reviewHistory.length + 1
      stats.totalOpenIssues = reviewHistory.reduce((total, currentValue) => total + currentValue.issues.filter(issue => !issue.resolved).length, 0) +
      currentReview?.issues.filter(issue => !issue.resolved).length
      stats.avgOverallScore = (reviewHistory.reduce((total, currentValue,index) => (total + currentValue.overallScore), 0) + currentReview.overallScore)/stats.totalReviews
      stats.severityStats.high = reviewHistory.reduce((total, currentValue) => total + currentValue.issues.filter(issue => issue.severity === 'high').length, 0) + currentReview.issues.filter(issue => issue.severity === 'high').length
      stats.severityStats.medium = reviewHistory.reduce((total, currentValue) => total + currentValue.issues.filter(issue => issue.severity === 'medium').length, 0) + currentReview.issues.filter(issue => issue.severity === 'medium').length
      stats.severityStats.low = reviewHistory.reduce((total, currentValue) => total + currentValue.issues.filter(issue => issue.severity === 'low').length, 0) + currentReview.issues.filter(issue => issue.severity === 'low').length
    }
    return stats
  })
}
