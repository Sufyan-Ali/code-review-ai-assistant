import { Component, input } from '@angular/core';

interface DashboardStats {
  totalReviews: number,
  avgOverallScore: number,
  totalOpenIssues: number,
  severityStats: {
    high: number,
    medium: number,
    low: number
  }
}
@Component({
  selector: 'app-stats-summary-components',
  imports: [],
  templateUrl: './stats-summary-components.html',
  styleUrl: './stats-summary-components.css',
})
export class StatsSummaryComponents {
  reviewStats = input<DashboardStats>()
}
