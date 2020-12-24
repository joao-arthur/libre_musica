import React from 'react';
import GlobalStyle from './Components/Core/GlobalStyle';
import Scales from './Pages/Scales';
import Home from './Pages/Home';
import BasePage from './Pages/BasePage';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => (
    <>
        <GlobalStyle />
        <Router>
            <BasePage>
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/scales'>
                        <Scales />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </BasePage>
        </Router>
    </>
);

/*TODO
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
*/
