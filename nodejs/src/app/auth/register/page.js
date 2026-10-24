"use client";

import { useActionState } from "react";
import { registerAction } from "./actions";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  const [state, action, isPending] = useActionState(registerAction, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl rounded-2xl border-none">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Create Account</h1>
              <p className="text-sm text-gray-500">
                Sign up to get started
              </p>
            </div>

            <form action={action} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="pl-10 h-11 rounded-xl"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="pl-10 h-11 rounded-xl"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="pl-10 h-11 rounded-xl"
                />
              </div>

              {/* Error */}
              {state?.error && (
                <p className="text-sm text-red-500 text-center">
                  {state.error}
                </p>
              )}

              {/* Button */}
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-11 rounded-xl text-base"
              >
                {isPending ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Creating account...
                  </motion.span>
                ) : (
                  "Register"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500">
              Already have an account? <Link href="/auth/login"><span className="font-medium text-black cursor-pointer">Login</span></Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
