import { company } from "./company.interface";

interface applicant {
    id: number;
    step: number;
}

export interface Job {
    id: string;
    title: string;
    description: string;
    salary: number;
    company: company;
    applicants: applicant[];
}