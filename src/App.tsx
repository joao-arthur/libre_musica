import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/core/GlobalStyle';
import { Scales } from './pages/Scales';
import { Home } from './pages/Home';
import { BasePage } from './pages/BasePage';
import { NotFound } from './pages/NotFound';

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
