package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

func handler(w http.ResponseWriter, r *http.Request) {

	tmpl, _ := template.ParseFiles("../index.html")

	if err := tmpl.ExecuteTemplate(w, "index.html", nil); err != nil {
		fmt.Println("54:" + err.Error())
		http.Error(w, http.StatusText(500), 500)
	}
}

func main() {
	fs := http.FileServer(http.Dir("../public"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
