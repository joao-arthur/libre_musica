import { StrictMode } from 'react';
import GlobalStyle from './Components/Core/GlobalStyle';
import Scales from './Pages/Scales';
import Home from './Pages/Home';
import BasePage from './Pages/BasePage';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
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

/*TODO
    header fixo na página ou não?
    Implementar history nas rotas
    ícones na sidebar
    sidebar hamburguer
    header
    footer
    home
    melhorar página não encontrada
    criar testes
    implementar cadastro
    implementar login
    melhorar layout da página de escalas
    acordes com outras notas
    progressões de acordes
    sons de notas
    efeitos no som
    notação musical
    tocar músicas

    header que rola com a página, que possui o botão pro hamburguer da sidebar
    quando a sidebar estiver fechada vai aparecer apenas os ícones de cada página
    sidebar flutuante

    footer

    © 2020 joão arthur ajuda sobre contato

    footer no final da página, sem problema
*/
