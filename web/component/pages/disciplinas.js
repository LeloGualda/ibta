import React from 'react'
import {Row, Col} from 'react-bootstrap'

import WebService from './materias/webservice'
import Sidebar from './sidebar/sidebar'

export default function () {
    return <Row>
        <Col>
            <Sidebar>
            </Sidebar>
        </Col>
        <Col>
            <WebService/>
        </Col>
    </Row>
}
