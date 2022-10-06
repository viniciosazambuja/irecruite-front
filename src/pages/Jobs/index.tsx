import styles from './styles.module.scss'
import { Main } from "../../components/Main";
import { Job } from "../../interfaces/job.interfaces";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Text } from "../../components/Text";
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../../components/Button';


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
                        placeholder="Procurar por um trabalho..."
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                    />
                </div>
                <Text size="large">{`${filteredJobs.length} trabalhos encontrados`}</Text>
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
            <div className={styles.infos}>
                <Text size="large" bold>{job.title}</Text>
                <Text size="small">{job.description}</Text>
                <Text size="small">{formatCurrency(job.salary)}</Text>
            </div>
            <div className={styles.buttons}>
                <Button
                    onClick={() => console.log('Ver mais')}
                    secondary
                >Ver mais</Button>
                <Button
                    onClick={() => console.log('Candidatar-se')}
                >Candidatar-se</Button>
            </div>
        </div>
    )
}