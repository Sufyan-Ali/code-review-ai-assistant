export interface Issue {
        id: string,
        title: string,
        description: string,
        severity: string,
        lineNumber: number,
        suggestion: string,
        category: string,
        resolved: boolean

}