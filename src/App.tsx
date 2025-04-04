import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
// import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { MenuItem } from "./components/MenuItem";
import { HomeIcon } from "lucide-react";

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <MenuItem>
                    <HomeIcon />
                </MenuItem>
            </Container>
        </>
    );
}
