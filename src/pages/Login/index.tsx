import { Container } from "../../components/Container";
import { FlexArea } from "../../components/FlexArea";
import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { Button } from '../../components/Button';
import { useState } from 'react';
import { Input } from '../../components/Input';
import axios from 'axios';
import { Form } from '../../components/Form';
import { useNavigate } from 'react-router-dom';

interface LoginInfo {
    email: string;
    password: string;
}

export function Login(): JSX.Element {
    return (
        <Container>
            <FlexArea
                height='100%'
                width='100%'
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <CardLogin />
            </FlexArea>
        </Container>
    )
}

function CardLogin(): JSX.Element {

    const navigate = useNavigate();

    const [data, setData] = useState<LoginInfo>({
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await axios.post(`http://localhost:3030/login`);

        if(response.status === 200) navigate('/jobs');
    };

    return (
        <Card>
            <Form onSubmit={handleSubmit}>
                <Text size='large' color='dark' bold>Login</Text>
                <Input
                    type='email'
                    label='Email'
                    name='email'
                    placeholder='yorname@email.com.br'
                    value={data.email}
                    onChange={handleChange}
                />
                <Input
                    type='password'
                    label='Password'
                    name='password'
                    placeholder='********'
                    value={data.password}
                    onChange={handleChange}
                />
                <Button type='submit'>Entrar agora</Button>
            </Form>
        </Card>
    )
}