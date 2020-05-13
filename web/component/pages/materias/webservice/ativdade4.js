import React from "react"

export default function () {
  return (
    <div className="ativade">
      <h3 id="atividade-4">
        <label>Atividade 4</label>: Web Services Description Language
      </h3>
      <h4>Descrição:</h4>
      <p>
        A Web Services Description Language (WSDL) é uma linguagem baseada em
        XML utilizada para descrever Web Services funcionando como um contrato
        do serviço. Trata-se de um documento escrito em XML que além de
        descrever o serviço, especifica como acessá-lo e quais as operações ou
        métodos disponíveis. Foi submetida ao W3C por Ariba, IBM e Microsoft em
        março de 2001 sendo que seu primeiro rascunho foi disponibilizado em
        julho de 2002. A versão atual é 2.0. a versão 1.1 não foi endossada pelo
        W3C. A WSDL 1.2 foi renomeada para 2.0 e aceita todos os métodos de
        requisição HTTP (não apenas GET e POST). WSDL é utilizada para definir
        serviços como uma coleção de endpoints (endereços de rede), ou portas. A
        definição abstrata de portas e mensagens são separadas do uso concreto
        de instâncias, permitindo o reuso de definições. Uma porta é definida
        por associação a um endereço de rede com um binding reutilizável, e uma
        coleção de portas definidas como serviço. Mensagens são descrições
        abstratas dos dados a serem trocados. Recursos são expostos pelo Web
        Services Interoperability (WS-I Basic Profile) e framework WSRF.
      </p>
      <h4> Serviço: </h4>
      <p>
        Pode ser visto como um container para conjunto de funções de sistema que
        foram expostos a protocolo baseado em web.
      </p>
      <h4> Porta: </h4>
      <p>
        Não é nada além da definição do endereço ou ponto de conexão para o Web
        Service. É representado tipicamente por uma URL simples com http.
      </p>
      <h4> Binding: </h4>
      <p>
        Especifica a interface, define o estilo de SOAP binding (RPC ou
        Document) e transporte (protocolo SOAP). Seções de binding também
        definem as operações.
      </p>
      <h4> Tipo de porta: </h4>
      <p>
        O elemento <b>portType</b> define um web service, as operações que podem
        ser executadas, e as mensagens trocadas para executar a operação
      </p>
      <h4> Operação: </h4>
      <p>
        Cada operação pode ser comparada a um método ou chamada de função em uma
        linguagem de programação tradicional. Aqui as ações soap são definidas e
        o tipo de mensagem é codificado.
      </p>
      <h4> Mensagem: </h4>
      <p>
        Tipicamente, uma mensagem corresponde a uma operação. A mensagem contém
        as informações necessárias para executar a operação.
      </p>
      <h4> Elemento: </h4>
      <p>
        Definidos com a tag <b> types</b>, consistem em um nome único e tipo de
        dado. Seu propósito é descrever um dado e definir uma tag que delimite
        os dados enviados.
      </p>
      <h4>Arquivos XSD </h4>
      <p>
        Elementos podem ser definidos em um esquema XML - XSD (XML Schema
        Definition). Pode estar no mesmo arquivo WSDL ou em arquivo separado.
      </p>
      <h4>
          <a href="https://pt.wikipedia.org/wiki/Web_Services_Description_Language">font</a>
      </h4>
    </div>
  )
}
