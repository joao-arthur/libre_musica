import type { JSX } from "react";
import { StrictMode } from "react";
import { Scales } from "../func/Scales/Scales";
import { BasePage } from "../func/BasePage";

export default function App(): JSX.Element {
    return (
        <StrictMode>
            <BasePage>
                <Scales />
            </BasePage>
        </StrictMode>
    );
}
