/** "Sign In / Welcome Back" block at the top of the form card. */
export function AuthFormHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-start">
      <p className="text-body-m text-primary sm:text-body-l">{eyebrow}</p>
      <h1 className="font-heading text-heading-s text-shuttle-950 sm:text-heading-m">{title}</h1>
    </div>
  );
}
