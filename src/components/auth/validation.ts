export type AuthField = "fullName" | "email" | "password";
type AuthValues = Partial<Record<AuthField, string>>;
export type AuthErrors = Partial<Record<AuthField, string>>;

const MIN_PASSWORD_LENGTH = 8;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateAuth(values: AuthValues, fields: readonly AuthField[]): AuthErrors {
  const errors: AuthErrors = {};

  for (const field of fields) {
    const value = values[field] ?? "";

    if (field === "fullName" && !value.trim()) {
      errors.fullName = "Enter your full name";
    }

    if (field === "email") {
      if (!value.trim()) errors.email = "Enter your email address";
      else if (!EMAIL_PATTERN.test(value.trim())) errors.email = "Enter a valid email address";
    }

    if (field === "password") {
      if (!value) errors.password = "Enter your password";
      else if (value.length < MIN_PASSWORD_LENGTH)
        errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
    }
  }

  return errors;
}
