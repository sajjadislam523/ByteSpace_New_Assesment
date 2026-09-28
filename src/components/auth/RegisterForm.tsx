"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthFormHeading } from "./AuthFormHeading";
import { useAuthForm } from "./useAuthForm";

const fields = ["fullName", "email", "password"] as const;

export function RegisterForm() {
  const { errors, status, handleSubmit, handleChange } = useAuthForm(fields);
  const submitting = status === "submitting";

  return (
    <div className="flex flex-col items-center gap-16 xl:gap-[122px]">
      <form
        noValidate
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="flex w-full flex-col gap-10"
      >
        <AuthFormHeading eyebrow="Create an Account" title="Welcome to ByteSpace" />
        <div className="flex flex-col gap-6">
          <Input
            label="Full Name"
            name="fullName"
            autoComplete="name"
            placeholder="Jamie Davis"
            error={errors.fullName}
          />
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
            autoComplete="new-password"
            placeholder="********"
            error={errors.password}
          />
          <div className="flex items-center justify-end gap-4">
            <p role="status" className="flex-1 text-body-s text-primary">
              {status === "success" && "Account created. Welcome to ByteSpace!"}
            </p>
            <Button type="submit" disabled={submitting} aria-busy={submitting}>
              {submitting ? "Creating account…" : "Continue"}
            </Button>
          </div>
        </div>
      </form>

      <p className="flex flex-wrap justify-center gap-1 text-body-m text-shuttle-700">
        Already have an account?
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
