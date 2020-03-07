import React from 'react'

export default function(){
    return <div className="ativade">
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
        <h4> Métodos: </h4>
        <h3> GET </h3>
        <p>
            O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
</p>

        <h3> HEAD </h3>
        <p>
            O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.
</p>

        <h3> POST </h3>
        <p>
            O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
</p>
        <h3>
            PUT
</h3>
        <p>
            O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
</p>
        <h3>
            DELETE
</h3>
        <p>
            O método DELETE remove um recurso específico.
</p>
        <h3>
            CONNECT
</h3>
        <p>
            O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.
</p>
        <h3>
            OPTIONS
</h3>
        <p>
            O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino.
</p>
        <h3>
            TRACE
</h3>
        <p>
            O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.
</p>
        <h3>
            PATCH
</h3>
        <p>
            O método PATCH é utilizado para aplicar modificações parciais em um recurso.
</p>
      
    </div>
}