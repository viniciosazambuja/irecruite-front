import axios from "axios"
import { useState } from "react"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Container } from "../../components/Container"
import { FlexArea } from "../../components/FlexArea"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { Text } from '../../components/Text';

interface RegisterInfo {
    name: string
    email: string
    cnpj: string
    password: string
    confirmPassword: string
}

export function RegisterCompany(): JSX.Element {
    return (
        <Container>
            <FlexArea
                height='100%'
                width='100%'
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <CardRegister />
            </FlexArea>
        </Container>
    )
}

function CardRegister(): JSX.Element {

    const [registerData, setRegisterData] = useState<RegisterInfo>({
        name: '',
        email: '',
        cnpj: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterData({ ...registerData, [name]: value });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userData = {
            name: registerData.name,
            cnpj: registerData.cnpj,	
            email: registerData.email,
            password: registerData.password
        }

        await axios.post('/companies', userData);

        window.location.href = '/login';
    }

    return (
        <Card>
            <Form onSubmit={handleSubmit}>
                <Text size='large' color='dark' bold>Register</Text>
                <Input
                    name='name'
                    type='text'
                    label='Company Name'
                    placeholder='Company name'
                    value={registerData.name}
                    onChange={handleInputChange}
                />
                <Input
                    name='email'
                    type='email'
                    label='Email'
                    placeholder='Email'
                    value={registerData.email}
                    onChange={handleInputChange}
                />
                <Input
                    name='cnpj'
                    type='text'
                    label='CNPJ'
                    placeholder='CNPJ'
                    value={registerData.cnpj}
                    onChange={handleInputChange}
                />
                <Input
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='Password'
                    value={registerData.password}
                    onChange={handleInputChange}
                />
                <Input
                    name='confirmPassword'
                    type='password'
                    label='Confirm Password'
                    placeholder='Confirm Password'
                    value={registerData.confirmPassword}
                    onChange={handleInputChange}
                />
                <Button type='submit'>Cadastrar</Button>
            </Form>
        </Card>
    )
}