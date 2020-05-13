import React from "react";
import {Switch as S, Route} from "react-router-dom";

import Home from './pages/home'
import TCC from './pages/tcc'
import Disciplinas from './pages/disciplinas'
import { Container } from 'react-bootstrap'
import Atividade1 from './pages/materias/webservice/ativdade1'
import Atividade2 from './pages/materias/webservice/ativdade2'
import Atividade3 from './pages/materias/webservice/ativdade3'
import Atividade4 from './pages/materias/webservice/ativdade4'



export default function Switch() {
    return <Container><S>
        <Route exact path="/1">
            <Atividade1/>
        </Route>
        <Route exact path="/2">
            <Atividade2/>
        </Route>
        <Route exact path="/3">
            <Atividade3/>
        </Route>
        <Route exact path="/4">
            <Atividade4/>
        </Route>
    </S>
    </Container>
}