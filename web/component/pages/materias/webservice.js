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

        <p className="code">
                {`package main

                import (
                    "fmt"
                    "log"
                    "net/http"
                    "text/template"
                )

                func handler(w http.ResponseWriter, r *http.Request) {

                    tmpl, _ := template.ParseFiles("../indexLocal.html")
                    fmt.Println(r.URL.Path)
                    if err := tmpl.ExecuteTemplate(w, "indexLocal.html", nil); err != nil {
                        fmt.Println("54:" + err.Error())
                        http.Error(w, http.StatusText(500), 500)
                    }
                }

                func main() {
                    fs := http.FileServer(http.Dir("../public"))
                    http.Handle("/public/", http.StripPrefix("/public/", fs))

                    http.HandleFunc("/ibta/", handler)
                    fmt.Println("start server, open: localhost:8080")
                    log.Fatal(http.ListenAndServe(":8080", nil))

                }
            `}
        </p>

    </ShowText>
}

const ShowText = styled.div`

`