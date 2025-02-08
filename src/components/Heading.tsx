import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { cn } from "@/lib/utils";

const headingVariants = cva("", {
  variants: {
    size: {
      1: "text-headingXl",
      2: "text-headingLg",
      3: "text-headingMd",
      4: "text-headingSm",
      5: "text-headingXs",
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
  const className = clsx("font-inter font-bold", {
    "underline decoration-solid decoration-2 decoration-current": underline,
    italic: italic,
  });

  return (
    <p className={`${className} ${cn(headingVariants({ size }))}`}>
      {children}
    </p>
  );
};
