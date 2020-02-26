import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from 'react-bootstrap'

import Menu from './component/menu'
import Switch from './component/switch'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render() {
        return <Router>
            <Container >
			 <Menu/>
             </Container>
			<Switch/>
        </Router>
    }
}

render(<App/>, document.getElementById('react'))