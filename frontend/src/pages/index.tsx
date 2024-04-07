import type { JSX } from "react";
import { StrictMode } from "react";
import { Scales } from "../feature/Scales/Scales";
import { BasePage } from "../feature/BasePage";

export default function App(): JSX.Element {
    return (
        <StrictMode>
            <BasePage>
                <Scales />
            </BasePage>
        </StrictMode>
    );
}
