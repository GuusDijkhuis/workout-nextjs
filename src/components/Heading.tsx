import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const headingVariants = cva("", {
  variants: {
    size: {
      1: "text-heading-xl",
      2: "text-heading-lg",
      3: "text-heading-md",
      4: "text-heading-sm",
      5: "text-heading-xs",
    },
  },
  defaultVariants: {
    size: 3,
  },
});

export type TextProps = {
  children: string;
  italic?: boolean;
  size?: 1 | 2 | 3 | 4 | 5;
  underline?: boolean;
} & VariantProps<typeof headingVariants>;

export const Heading = ({
  children,
  underline = false,
  italic = false,
  size = 3,
}: TextProps) => {
  const className = cn("font-inter font-bold", {
    "underline decoration-solid decoration-2 decoration-current": underline,
    italic: italic,
  });

  return (
    <p className={`${className} ${cn(headingVariants({ size }))}
    `}>
      {children}
    </p>
  );
};
