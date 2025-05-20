package services

import (
    "log"
    "os"

    "github.com/supabase/supabase-go"
)

var SupabaseClient *supabase.Client

func InitSupabase() {
    supabaseURL := os.Getenv("SUPABASE_URL")
    supabaseKey := os.Getenv("SUPABASE_KEY")
    SupabaseClient = supabase.CreateClient(supabaseURL, supabaseKey)
    if SupabaseClient == nil {
        log.Fatal("Failed to initialize Supabase client")
    }
}