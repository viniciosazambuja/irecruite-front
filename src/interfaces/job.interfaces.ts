interface applicant {
    id: number;
    step: number;
}

export interface Job {
    id: number;
    title: string;
    description: string;
    salary: number;
    company: string;
    applicants: applicant[];
}