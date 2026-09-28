"use client";

import { useState, type FormEvent } from "react";
import { validateAuth, type AuthErrors, type AuthField } from "./validation";

type Status = "idle" | "submitting" | "success";

/** Submit + validation state shared by the Sign In and Register forms. */
export function useAuthForm(fields: readonly AuthField[]) {
  const [errors, setErrors] = useState<AuthErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(fields.map((field) => [field, String(data.get(field) ?? "")]));

    const nextErrors = validateAuth(values, fields);
    setErrors(nextErrors);

    const firstInvalid = fields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setStatus("idle");
      (form.elements.namedItem(firstInvalid) as HTMLInputElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    // TODO: send `values` to the auth API (sign in / register) once the backend exists.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  }

  // Clears a field's error as soon as the user edits it.
  function handleChange(event: FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement).name as AuthField;
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  }

  return { errors, status, handleSubmit, handleChange };
}
