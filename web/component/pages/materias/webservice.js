import React from 'react'
import styled from 'styled-components'

export default function () {

    return <ShowText>
        <h3 id="atividade-1">Atividade 1: Web Service</h3>
        <h4>
            O que é ?
        </h4>
        <p>
            Web service é uma estratégia de integração para comunicação, que permite
            aplicações enviar e receber dados com padrões (protocolos) pré estabelecidos.
        </p>
        <h4>
            Para que serve?
        </h4>
        <p>
            Possibilita agilidade e eficiência na comunicação com segura.
        </p>
        <h4>
            Resolve que problema?
        </h4>
        <p>
            Comunicação de aplicações através da internet para realizar integrações entre
            empresas.
        </p>
        <h4>
            Qual é o contexto?
        </h4>
        <p>
            Os Web Services são utilizados para disponibilizar serviços interativos na Web,
            podendo ser acessados por outras aplicações usando, por exemplo, o protocolo
            SOAP (Simple Object Access Protocol).
        </p>
        <h4>
            Qual é aplicabilidade?
        </h4>
        <p>
            Melhoria com eficiência em processos de produção e logística por exemplo,
            comunicação interna e dinâmica entre serviços sem interferência humana.
        </p>

        <h3 id="atividade-2">
            <label >Atividade 2
            </label>: HTTP</h3>
        <h4>Descrição:</h4>
        <p>
            O Hypertext Transfer Protocol, sigla HTTP é um protocolo de comunicação
            utilizado para sistemas de informação de hipermídia, distribuídos e
            colaborativos. Ele é a base para a comunicação de dados da World Wide Web.
            Hipertexto é o texto estruturado que utiliza ligações lógicas entre nós contendo
            texto.
        </p>

    </ShowText>
}

const ShowText = styled.div `

`