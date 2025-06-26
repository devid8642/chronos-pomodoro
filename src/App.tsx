import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { InputContainer } from "./components/InputContainer";

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <InputContainer
                    label_text="Nome do projeto"
                    input_type="text"
                    input_id="project-name"
                    input_placeholder="Digite o nome do projeto"
                />
            </Container>
        </>
    );
}
