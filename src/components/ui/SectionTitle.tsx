type SectionTitleProps = {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export default function SectionTitle({
  label,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      }`}
    >
      {label && (
        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
          {label}
        </span>
      )}

      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}