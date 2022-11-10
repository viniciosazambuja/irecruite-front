import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main } from "../../components/Main";
import { Text } from "../../components/Text";
import { Textarea } from "../../components/Textarea";

interface JobPostData {
    title: string;
    description: string;
    salary: string;
}

export function NewJob(): JSX.Element {

    const navigate = useNavigate();

    const [data, setData] = useState<JobPostData>({
        title: '',
        description: '',
        salary: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setData({
            ...data,
            [name]: value
        })
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const endpoint = 'http://localhost:3030/jobs';

        const salaryFormated = parseInt(data.salary.replace(/[^0-9]/g, ''));

        await axios.post(endpoint, { ...data, salary: salaryFormated });

        navigate('/jobs');
    };

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Text
                        size="large"
                        color="dark"
                        bold
                    >
                        Adicionar vaga de emprego
                    </Text>
                    <Form
                        onSubmit={handleSubmit}
                    >
                        <Input
                            label="Título"
                            placeholder="Título da vaga"
                            value={data.title}
                            type="text"
                            name="title"
                            onChange={handleChange}
                        />
                        <Input
                            label="Salário"
                            placeholder="Salário da vaga (Ex.: 1.000,00)"
                            value={data.salary}
                            type="text"
                            name="salary"
                            onChange={handleChange}
                            monetary
                        />
                        <Textarea
                            label="Descrição"
                            placeholder="Descrição da vaga"
                            value={data.description}
                            name="description"
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                        >
                            Adicionar
                        </Button>
                    </Form>
                </Container>
            </Main>
        </>
    )
}