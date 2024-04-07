import type { JSX } from "react";
import { StrictMode } from "react";
import { BasePage } from "../feat/BasePage";
import { Tuning } from "../feat/Tuning/Tuning";

export default function AppIndex(): JSX.Element {
    return (
        <StrictMode>
            <BasePage>
                <Tuning />
            </BasePage>
        </StrictMode>
    );
}
