import styles from './styles.module.scss'
import { Main } from "../../components/Main";
import { Job } from "../../interfaces/job.interfaces";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Text } from "../../components/Text";


export function Jobs(): JSX.Element {

    const [jobs, setJobs] = useState<Job[]>([]);
    const [searchString, setSearchString] = useState<string>('');

    useEffect(() => {
        async function getData() {
            const response = await axios.get('http://localhost:3030/jobs');

            const jobsData: Job[] = response.data?.map((job: any) => {

                return {
                    id: job.id,
                    title: job.title,
                    description: job.description,
                    salary: job.salary,
                    company: job.company.name,
                    applicants: job.applicants?.map((applicant: any) => {

                        return {
                            id: applicant.id,
                            step: applicant.step
                        }
                    })
                }
            })

            setJobs(jobsData);
        }

        getData();
    }, []);

    const filteredJobs = jobs.filter((job) => {

        const term = searchString.toLowerCase();

        if(!searchString) return true

        if(job.title.toLowerCase().includes(term)) return true

        if(job.description.toLowerCase().includes(term)) return true

        if(job.company.toLowerCase().includes(term)) return true

        return false

    });

    const hasJobs = filteredJobs.length > 0;
    
    return (
        <Main id="jobs-page" className={styles.main}>
            <header className={styles.header}>
                <div className={styles.inputArea}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Search for a job"
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                    />
                </div>
                <Text size="large">{`${filteredJobs.length} jobs found`}</Text>
            </header>
            <div className={styles.cards}>
                {hasJobs && filteredJobs.map((job) => JobCard(job))}
            </div>
        </Main>
    )
}

function JobCard(job: Job) {
    return (
        <div className={styles.job}>
            <Text size="large" bold>{job.title}</Text>
            <Text size="medium">{job.company}</Text>
            <Text size="small">{job.description}</Text>
            <Text size="small">{job.salary}</Text>
        </div>
    )
}