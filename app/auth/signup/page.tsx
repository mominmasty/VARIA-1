"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Signing up user:", {
        name: signupName,
        email: signupEmail,
        phone: signupPhone,
        password: signupPassword,
      });
      
      const result = await signIn("credentials", {
        email: signupEmail,
        password: signupPassword,
        name: signupName,
        redirect: false,
      });

      if (result?.error) {
        console.error("Signup error:", result.error);
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18132a] via-[#1a0066] to-[#2a0080] flex items-center justify-center p-4">
      <Card className="bg-black/40 backdrop-blur-sm border border-white/10 w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              VARIA
            </span>
          </CardTitle>
          <CardDescription className="text-gray-400">Create your account</CardDescription>
          <Link 
            href="/auth/signin"
            className="text-gray-400 hover:text-white mt-2 inline-block"
          >
            Already have an account? Sign in
          </Link>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Full Name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="bg-black/20 border-white/10 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="bg-black/20 border-white/10 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="Phone Number"
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
                className="bg-black/20 border-white/10 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="bg-black/20 border-white/10 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-black/20 border-white/10 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-100 transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 