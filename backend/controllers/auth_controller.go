package controllers

import (
    "net/http"
    "github.com/go-chi/chi/v5"
    "github.com/go-chi/render"
)

type AuthController struct{}

func NewAuthController() *AuthController {
    return &AuthController{}
}

func (ac *AuthController) Login(w http.ResponseWriter, r *http.Request) {
    // Handle login logic here
    render.JSON(w, r, map[string]string{"message": "Login successful"})
}

func (ac *AuthController) Register(w http.ResponseWriter, r *http.Request) {
    // Handle registration logic here
    render.JSON(w, r, map[string]string{"message": "Registration successful"})
}

func (ac *AuthController) Routes() chi.Router {
    r := chi.NewRouter()
    r.Post("/login", ac.Login)
    r.Post("/register", ac.Register)
    return r
}