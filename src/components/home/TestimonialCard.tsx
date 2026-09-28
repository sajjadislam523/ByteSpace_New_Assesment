import Image from "next/image";
import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  name: string;
  role: string;
  /** 80px round photo (160px source). */
  avatar: string;
  quote: string;
  className?: string;
};

/** White testimonial card: avatar, name and role above the quote. */
export function TestimonialCard({ name, role, avatar, quote, className }: TestimonialCardProps) {
  return (
    <figure className={cn("flex flex-col items-start gap-6 rounded-3xl bg-white p-6", className)}>
      <figcaption className="flex flex-col items-start gap-6">
        <Image
          src={avatar}
          alt=""
          width={80}
          height={80}
          className="size-20 rounded-full object-cover"
        />
        <span className="flex flex-col">
          {/* Figma "Heading XS" here uses a 28px line */}
          <span className="font-heading text-heading-xs leading-7 text-black">{name}</span>
          <span className="text-body-m text-primary sm:text-body-l">{role}</span>
        </span>
      </figcaption>
      <blockquote className="text-body-m text-black-700 sm:text-body-l">
        <p>{quote}</p>
      </blockquote>
    </figure>
  );
}
