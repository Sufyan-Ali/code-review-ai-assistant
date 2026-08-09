import { Component, input } from '@angular/core';
import { ReviewResult } from '../../review/models/review-result.model';
import { BadgeComponent } from "../../../shared/badge-component/badge-component";

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
  imports: [BadgeComponent],
  templateUrl: './stats-summary-components.html',
  styleUrl: './stats-summary-components.css',
})
export class StatsSummaryComponents {
  reviewStats = input<DashboardStats>()
  reviewHistory = input<ReviewResult[]>([])
  currentReview = input<ReviewResult | null>(null)
}
