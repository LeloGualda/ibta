import React from 'react'
import styled from 'styled-components'

import Atidade1 from './webservice/ativdade1'
import Atidade2 from './webservice/ativdade2'

export default function () {

    return <ShowText>

        <Atidade1/>
        <Atidade2/>
        <h3 id="atividade-3">
            <label >Atividade 3
            </label>: Exemplo Web service</h3>
        <h4>Linguagem GO</h4>
        <p>
            <Block>
                <b>1º</b>
                Arquivo html inicial
                <TextFileName>index.html</TextFileName>
                <img src="/ibta/public/image/atividade3/indexHtml.png"/>
            </Block>
            <Block>
                <b>2º</b>
                    Pasta pública para arquivos png,js,svg, etc...
                <TextFileName>/public/</TextFileName>
            </Block>
            <Block>
                <b>3º</b>
                Arquivo golang do servidor
                <TextFileName>server/server.go</TextFileName>
                <img src="/ibta/public/image/atividade3/serverGo.png"/>
            </Block>
            <Block>
                <b>3º inicie o servidor</b>
                <TextFileName style={{color:'black'}}>$ go run server.go</TextFileName>
            </Block>
            <Block>
                <b>Estrutura  Final</b>
                <TextFileName>index.html</TextFileName>
                <TextFileName>/public/</TextFileName>
                <TextFileName>server/server.go</TextFileName>
            </Block>
        </p>

    </ShowText>
}

const ShowText = styled.div `

`

const TextFileName = styled.label `
    display:block;
    color:#ff0004;
    background-color:#d6d6d6;
    width:max-content;
    padding:6px 10px;
    font-family:roboto;
    border-radius:4px;
`

const Block = styled.div `
    padding:10px 0px;
    img {
        width:auto;
        height:auto;
        display:block;
    }
`