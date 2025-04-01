import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { Timer } from "lucide-react";

export function App() {
    return (
        <>
            <Heading>
                Olá Mundo!
                <button>
                    <Timer />
                </button>
            </Heading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi repudiandae cumque illo ea deleniti ex velit placeat,
                nihil hic, tenetur magnam deserunt fugit labore. Nisi voluptatem
                sequi quas odio quam.
            </p>
        </>
    );
}
