import styles from './styles.module.scss'
import { Container } from "../../components/Container";
import { Job } from "../../interfaces/job.interfaces";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Text } from "../../components/Text";
import { formatCurrency } from '../../utils/formatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Main } from '../../components/Main';

export function Jobs(): JSX.Element {

    const [jobs, setJobs] = useState<Job[]>([]);
    const [searchString, setSearchString] = useState<string>('');
    const [idSelectedJob, setIdSelectedJob] = useState<string | null>(null);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('http://localhost:3030/jobs');

            const jobsData: Job[] = response.data?.map((job: any) => {

                return {
                    id: job._id,
                    title: job.title,
                    description: job.description,
                    salary: job.salary,
                    company: {
                        id: job.company._id,
                        name: job.company.name,
                        city: job.company.city,
                        state: job.company.state,
                        cnpj: job.company.cnpj,
                        email: job.company.email,
                        linkedin: job.company.linkedin,
                        phone: job.company.phone,
                        tradeName: job.company.tradeName,                        
                    },
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

        if(job.company.name.toLowerCase().includes(term)) return true

        return false

    });

    const hasJobs = filteredJobs.length > 0;

    useEffect(() => {
        if(!hasJobs) {
            setIdSelectedJob(null);
        }
        setIdSelectedJob(filteredJobs[0]?.id);
    }, [searchString, jobs])
    
    return (
        <Main>
            <Container id="jobs-page">
                <header className={styles.header}>
                    <div className={styles.inputArea}>
                        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
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
                    {hasJobs && filteredJobs.map((job) => {
                        return (
                            <JobCard
                                key={job.id}
                                selected={Boolean(idSelectedJob && idSelectedJob === job.id)}
                                onClick={() => setIdSelectedJob(job.id)}
                                {...job}
                            />
                        )
                    })}
                </div>
            </Container>
            <article className={styles.fullJob}>
                {filteredJobs.find((job) => job.id === idSelectedJob)
                ?
                    <Text size="large" bold>{filteredJobs.find((job) => job.id === idSelectedJob)?.title}</Text>
                :
                    <Text>Selecione um trabalho para ver mais detalhes....</Text>
                }
            </article>
        </Main>
    )
}

function JobCard(job: (Job & { selected?: boolean, onClick: () => void })): JSX.Element {
    return (
        <div onClick={job.onClick} className={`
            ${styles.job}
            ${job.selected ? styles.selected : ''}
        `}>
            <div className={styles.infos}>
                <Text size="large" bold>{job.title}</Text>
                <Text size="small">{job.description}</Text>
                <Text size="small">{formatCurrency(job.salary)}</Text>
            </div>
        </div>
    )
}