package main

import (
    "log"
    "net/http"
    // "os"

    "github.com/go-chi/chi/v5"
    "github.com/joho/godotenv"
    "backend/routes"
    "backend/utils"
)

func main() {
    // Load environment variables
    if err := godotenv.Load(); err != nil {
        log.Println("No .env file found")
    }

    // Initialize PostgreSQL database connection
    db, err := utils.InitDB()
    if err != nil {
        log.Fatalf("Could not connect to the database: %v", err)
    }
    defer db.Close()

    // Initialize Chi router
    router := chi.NewRouter()

    // Register routes
    routes.AuthRoutes(router)

    // Start the server
    log.Println("Starting server on :8080")
    if err := http.ListenAndServe(":8080", router); err != nil {
        log.Fatalf("Could not start server: %v", err)
    }
}