"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(loginAction, null);

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
              <Image src={'/images/favicon/favicon.png'} height={128} width={128} alt="brand logo" className="w-12 h-12 mx-auto" />
              {/* <h1 className="text-2xl font-bold">Welcome Back</h1> */}
              <p className="text-sm text-gray-500">
                Login to your account
              </p>
            </div>

            <form action={action} className="space-y-5">
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
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600 text-center font-medium">
                  {state.error}
                </div>
              )}

              {/* Button */}
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-11 rounded-xl text-base bg-teal-600 hover:bg-teal-700 text-white font-semibold transition"
              >
                {isPending ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Logging in...
                  </motion.span>
                ) : (
                  "Login to Hospital CMS"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500">
              Don’t have an account? <Link href="/auth/register"><span className="font-medium text-black cursor-pointer">Sign up</span></Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
