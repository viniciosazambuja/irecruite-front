import { Container } from "../../components/Container";
import { FlexArea } from "../../components/FlexArea";
import { Main } from "../../components/Main";
import { Text } from "../../components/Text";

export function NotFound(): JSX.Element{
    return (
        <Main>
            <Container>
                <FlexArea
                    height='100%'
                    width='100%'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text size='large'>
                        404 - Not Found
                    </Text>
                </FlexArea>
            </Container>
        </Main>

    )
}