import {Question} from './question.model';

export interface Quiz {
    id: number;
    category: string;
    maxScore: number;
    maxTime: number;
    questions: Question[];

}