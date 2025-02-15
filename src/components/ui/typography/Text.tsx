import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { TypographyProps } from "./types";


const textVariants = cva("font-inter", {
  variants: {
    fontWeight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    }
  },
  defaultVariants: {
    fontWeight: 'regular'
  },
});

export type TextProps = TypographyProps & VariantProps<typeof textVariants>;

export const Text = ({
  children,
  underline = false,
  uppercase,
  center,
  italic = false,
  className,
  fontWeight
}: TextProps) => (
    <p className={cn(
      textVariants({ fontWeight }), 
      underline && "underline decoration-solid decoration-2 decoration-current",
      uppercase && 'uppercase',
      center && 'text-center',
      italic && 'italic',
      className
    )}>
      {children}
    </p>
);
