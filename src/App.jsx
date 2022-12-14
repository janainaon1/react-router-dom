import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/css/base/base.css";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Pagina404 from "./pages/Pagina404";
import Cabecalho from "./components/Cabecalho";
import Post from "./pages/Post";
import Categoria from "./pages/Categoria";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
