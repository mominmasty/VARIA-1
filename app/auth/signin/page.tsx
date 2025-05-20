"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simple redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showOtpInput) {
      setIsLoading(true);
      try {
        console.log("Sending OTP to:", phoneNumber);
        setShowOtpInput(true);
      } catch (error) {
        console.error("Error sending OTP:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);
      try {
        console.log("Verifying OTP:", otp);
        router.push('/dashboard');
      } catch (error) {
        console.error("Error verifying OTP:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get("http://localhost:8080/auth/google");
      window.location.href = response.data.url; // Redirect to Google OAuth
    } catch (error) {
      console.error("Google Sign-In error:", error);
      alert("Failed to initiate Google Sign-In.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18132a] via-[#1a0066] to-[#2a0080] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Card className="bg-black/40 backdrop-blur-sm border border-white/10 w-full max-w-md relative overflow-hidden hover:border-white/20 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <CardHeader className="text-center relative">
          <CardTitle className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient hover:from-green-300 hover:via-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300">
              VARIA
            </span>
          </CardTitle>
          <CardDescription className="text-gray-400 text-lg hover:text-gray-300 transition-colors duration-300">Sign in to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/20 backdrop-blur-sm border border-white/10 p-1 rounded-full hover:border-white/20 transition-all duration-300">
              <TabsTrigger 
                value="email" 
                className="rounded-full data-[state=active]:bg-blue-500/20 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
              >
                Email
              </TabsTrigger>
              <TabsTrigger 
                value="phone" 
                className="rounded-full data-[state=active]:bg-purple-500/20 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
              >
                Phone
              </TabsTrigger>
              <TabsTrigger 
                value="google" 
                className="rounded-full data-[state=active]:bg-red-500/20 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300"
              >
                Google
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <form onSubmit={handleEmailSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 hover:border-white/20 transition-all duration-300 focus:ring-2 focus:ring-white/10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 hover:border-white/20 transition-all duration-300 focus:ring-2 focus:ring-white/10"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in with Email"}
                </Button>
                <div className="text-center mt-6">
                  <Link 
                    href="/auth/signup"
                    className="text-gray-400 hover:text-white transition-all duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:text-gray-300">Don't have an account?</span>
                    <span className="text-white group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-300">Sign up</span>
                  </Link>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="phone">
              <form onSubmit={handlePhoneSignIn} className="space-y-4">
                {!showOtpInput ? (
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 hover:border-white/20 transition-all duration-300 focus:ring-2 focus:ring-white/10"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending OTP..." : "Send OTP"}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 hover:border-white/20 transition-all duration-300 focus:ring-2 focus:ring-white/10"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25"
                      disabled={isLoading}
                    >
                      {isLoading ? "Verifying..." : "Verify OTP"}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="w-full text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                      onClick={() => setShowOtpInput(false)}
                    >
                      Change Phone Number
                    </Button>
                  </div>
                )}
              </form>
            </TabsContent>

            <TabsContent value="google">
              <Button
                className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-white/25"
                onClick={handleGoogleSignIn}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign in with Google
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
} 