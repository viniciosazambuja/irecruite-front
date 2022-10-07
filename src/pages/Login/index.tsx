import { Container } from "../../components/Container";
import { FlexArea } from "../../components/FlexArea";

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
                <Card />
            </FlexArea>
        </Container>
    )
}

function Card(): JSX.Element {
    return (
        <div>
            LOGIN CARD
        </div>
    )
}