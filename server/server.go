package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

func handler(w http.ResponseWriter, r *http.Request) {

	tmpl, _ := template.ParseFiles("./indexLocal.html")
	fmt.Println(r.URL.Path)
	if err := tmpl.ExecuteTemplate(w, "indexLocal.html", nil); err != nil {
		fmt.Println("54:" + err.Error())
		http.Error(w, http.StatusText(500), 500)
	}
}

func main() {
	fs := http.FileServer(http.Dir("./"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))

	http.HandleFunc("/", handler)
	fmt.Println("start server, open: localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

}
