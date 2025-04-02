import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
    return (
        <>
            <Container>
                <Heading>Testando o heading 1!</Heading>
            </Container>

            <Container>
                <Heading>Testando o heading 2!</Heading>
            </Container>
        </>
    );
}
