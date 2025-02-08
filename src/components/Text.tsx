import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-bodyXs",
      sm: "text-bodySm",
      md: "text-bodyMd",
      lg: "text-bodyLg",
      xl: "text-bodyXl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type TextProps = {
  bold?: boolean;
  children: string;
  italic?: boolean;
  size?: Size;
  underline?: boolean;
} & VariantProps<typeof textVariants>;

export const Text = ({
  children,
  bold = false,
  underline = false,
  italic = false,
  size = "md",
}: TextProps) => {
  const className = clsx("font-inter", {
    "font-bold": bold,
    "underline decoration-solid decoration-2 decoration-current": underline,
    italic: italic,
  });

  return (
    <p className={`${className} ${cn(textVariants({ size }))}`}>{children}</p>
  );
};
