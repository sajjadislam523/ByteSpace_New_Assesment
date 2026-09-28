import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z" />
    </Icon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.41 8.29504L12 12.875L16.59 8.29504L18 9.70504L12 15.705L6 9.70504L7.41 8.29504Z" />
    </Icon>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </Icon>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </Icon>
  );
}

export function ShoppingBagIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" />
    </Icon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z" />
    </Icon>
  );
}

export function SignalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
    </Icon>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </Icon>
  );
}

export function CategoryIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Icon>
  );
}
