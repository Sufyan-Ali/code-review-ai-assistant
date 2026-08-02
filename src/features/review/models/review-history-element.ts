import { ReviewResult } from "./review-result.model";

export interface ReviewHistoryElement{
    id: number,
    date: Date,
    language: string,
    code: string,
    reviewFocus: string,
    reviewResult: ReviewResult
}