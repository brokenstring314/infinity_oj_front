import type { tagState } from './tagState'
export interface QuestionListInfoState {
    problemId: string
    title: string
    authorId: number
    score: number
    auth: string
    submission_count: number
    accepted_count: number
    solve_status: number
    tags: tagState[]
}

// "problemId": "TEST001",
//         "title": "最大数",
//         "authorId": 45,
//         "score": 200,
//         "auth": 1,
//         "solve_status": 0,
//         "tags": null,
//         "submission_count": 0,
//         "accepted_count": 0