import { StrictMode } from "react";
import { Scales } from "./Scales";
import { BasePage } from "./BasePage";

export default function App() {
    return (
        <StrictMode>
            <BasePage>
                <Scales />
            </BasePage>
        </StrictMode>
    );
}
