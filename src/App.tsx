import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './Components/Core/GlobalStyle';
import { Scales } from './Pages/Scales';
import { Home } from './Pages/Home';
import { BasePage } from './Pages/BasePage';
import { NotFound } from './Pages/NotFound';

export function App() {
    return (
        <StrictMode>
            <GlobalStyle />
            <BrowserRouter>
                <BasePage>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/scales' element={<Scales />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BasePage>
            </BrowserRouter>
        </StrictMode>
    );
}
