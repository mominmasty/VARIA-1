package routes

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/your_project/services" // Replace with your module name
)

// Email/Password Signup
func SignUp(c *gin.Context) {
    var req struct {
        Email    string `json:"email"`
        Password string `json:"password"`
        Phone    string `json:"phone"`
    }
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    resp, err := services.SupabaseClient.Auth.SignUp(map[string]interface{}{
        "email":    req.Email,
        "password": req.Password,
        "phone":    req.Phone,
    })
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "User signed up successfully", "data": resp})
}

// Email/Password Signin
func SignIn(c *gin.Context) {
    var req struct {
        Email    string `json:"email"`
        Password string `json:"password"`
    }
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    resp, err := services.SupabaseClient.Auth.SignIn(map[string]interface{}{
        "email":    req.Email,
        "password": req.Password,
    })
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "User signed in successfully", "data": resp})
}

// Send OTP
func SendOTP(c *gin.Context) {
    var req struct {
        Phone string `json:"phone"`
    }
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    resp, err := services.SupabaseClient.Auth.SendOTP(req.Phone)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "OTP sent successfully", "data": resp})
}

// Verify OTP
func VerifyOTP(c *gin.Context) {
    var req struct {
        Phone string `json:"phone"`
        OTP   string `json:"otp"`
    }
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    resp, err := services.SupabaseClient.Auth.VerifyOTP(req.Phone, req.OTP)
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "OTP verified successfully", "data": resp})
}

// Google OAuth Redirect
func GoogleSignIn(c *gin.Context) {
    resp, err := services.SupabaseClient.Auth.SignInWithOAuth("google", map[string]interface{}{
        "redirect_to": "http://localhost:3000/auth/callback",
    })
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    c.JSON(http.StatusOK, gin.H{"url": resp})
}

// Google OAuth Callback
func GoogleCallback(c *gin.Context) {
    code := c.Query("code")
    if code == "" {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Missing code in callback"})
        return
    }

    resp, err := services.SupabaseClient.Auth.ExchangeCodeForSession(code)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Google OAuth successful", "data": resp})
}