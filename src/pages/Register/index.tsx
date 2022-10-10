import { useState } from "react"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Container } from "../../components/Container"
import { FlexArea } from "../../components/FlexArea"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { Text } from '../../components/Text';

interface RegisterInfo {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

export function Register(): JSX.Element {
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterData({ ...registerData, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);
    }

    return (
        <Card>
            <Form onSubmit={handleSubmit}>
                <Text size='large' color='dark' bold>Register</Text>
                <Input
                    name='firstName'
                    type='text'
                    label='First Name'
                    placeholder='First Name'
                    value={registerData.firstName}
                    onChange={handleInputChange}
                />
                <Input
                    name='lastName'
                    type='text'
                    label='Last Name'
                    placeholder='Last Name'
                    value={registerData.lastName}
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