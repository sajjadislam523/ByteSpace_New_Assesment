"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthFormHeading } from "./AuthFormHeading";
import { useAuthForm } from "./useAuthForm";

const fields = ["email", "password"] as const;

const socialProviders = [
  { name: "Facebook", icon: "/images/auth/facebook.svg" },
  { name: "Google", icon: "/images/auth/google.svg" },
];

export function LoginForm() {
  const { errors, status, handleSubmit, handleChange } = useAuthForm(fields);
  const submitting = status === "submitting";

  return (
    <div className="flex flex-1 flex-col justify-between gap-10">
      <form noValidate onSubmit={handleSubmit} onChange={handleChange} className="flex flex-col gap-10">
        <AuthFormHeading eyebrow="Sign In" title="Welcome Back" />
        <div className="flex flex-col gap-6">
          <Input
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            error={errors.email}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            error={errors.password}
          />
          <div className="flex items-center justify-end gap-4">
            <p role="status" className="flex-1 text-body-s text-primary">
              {status === "success" && "You're signed in. Welcome back!"}
            </p>
            <Button type="submit" disabled={submitting} aria-busy={submitting}>
              {submitting ? "Signing in…" : "Sign In"}
            </Button>
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-[11px]">
          <span aria-hidden="true" className="h-px flex-1 bg-black-200" />
          <span className="text-body-l text-black-400">or</span>
          <span aria-hidden="true" className="h-px flex-1 bg-black-200" />
        </div>
        {/* TODO: connect the social sign-in providers. */}
        <div className="flex items-center gap-4">
          {socialProviders.map((provider) => (
            <button
              key={provider.name}
              type="button"
              aria-label={`Sign in with ${provider.name}`}
              className="flex size-18 items-center justify-center rounded-3xl border border-black-200 transition-colors hover:border-shuttle-400"
            >
              <Image src={provider.icon} alt="" width={40} height={40} unoptimized />
            </button>
          ))}
        </div>
      </div>

      <p className="flex flex-wrap justify-center gap-1 text-body-m text-black-400">
        New user?
        <Link href="/register" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
