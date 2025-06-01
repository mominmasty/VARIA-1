package routes

import (
    "github.com/go-chi/chi/v5"
    "backend/controllers"
)

func AuthRoutes(r chi.Router) {
    ac := controllers.NewAuthController()
    r.Post("/login", ac.Login)
    r.Post("/register", ac.Register)
}