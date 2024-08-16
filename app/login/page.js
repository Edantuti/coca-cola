"use client";

import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-96 h-56 bg-slate-200 rounded flex flex-col">
        <h2 className="text-center my-10 text-xl">Login</h2>

        <Button
          variant="contained"
          className="w-80 mx-auto flex gap-2"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <GoogleIcon />
          Google
        </Button>
      </div>
    </section>
  );
}
