import React from "react";
import {Switch as S, Route} from "react-router-dom";

import Home from './pages/home'
import TCC from './pages/tcc'
import Disciplinas from './pages/disciplinas'
import { Container } from 'react-bootstrap';

export default function Switch() {
    return <Container><S>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/tcc">
            <TCC/>
        </Route>
        <Route  path="/disciplinas/:info" children={Disciplinas}/>
    </S>
    </Container>
}