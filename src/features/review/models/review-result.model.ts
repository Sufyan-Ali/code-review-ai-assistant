import { Issue } from "./issue.model";

export interface ReviewResult{
    id: number,
    date: Date,
    language: string,
    code: string,
    reviewFocus: string,
    issues: Issue[],
    comments: string[],
    overallScore: number
}