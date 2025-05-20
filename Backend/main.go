package main

import (
    "log"

    "github.com/gin-gonic/gin"
    "github.com/your_project/routes"   // Replace with your module name
    "github.com/your_project/services" // Replace with your module name
)

func main() {
    // Initialize Supabase
    services.InitSupabase()

    // Create a new Gin router
    r := gin.Default()

    // Register routes
    r.POST("/auth/signup", routes.SignUp)
    r.POST("/auth/signin", routes.SignIn)
    r.POST("/auth/otp", routes.SendOTP)
    r.POST("/auth/verify-otp", routes.VerifyOTP)
    r.GET("/auth/google", routes.GoogleSignIn)
    r.GET("/auth/callback", routes.GoogleCallback)

    // Start the server
    log.Fatal(r.Run(":8080"))
}