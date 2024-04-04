import { StrictMode } from "react";
import { Scales } from "./pages/Scales";
import { BasePage } from "./pages/BasePage";

export function App() {
    return (
        <StrictMode>
            <BasePage>
                <Scales />
            </BasePage>
        </StrictMode>
    );
}
