import React from "react";
import {Switch as S, Route} from "react-router-dom";

import Home from './pages/home'
import TCC from './pages/tcc'
import Disciplinas from './pages/disciplinas'
import { Container } from 'react-bootstrap';

export default function Switch() {
    return <Container><S>
        <Route exact path="/ibta/">
            <Home/>
        </Route>
        <Route  path="/ibta/tcc">
            <TCC/>
        </Route>
        <Route  basename="/ibta"  path="/disciplinas/:info" children={Disciplinas}/>
    </S>
    </Container>
}