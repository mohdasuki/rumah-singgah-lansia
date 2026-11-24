import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline"
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-secondary",

  secondary:
    "bg-soft-green text-primary hover:bg-green-200",

  outline:
    "border border-primary text-primary hover:bg-soft-green",
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full px-6 py-3.5
        text-sm font-semibold
        transition-colors duration-300
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}