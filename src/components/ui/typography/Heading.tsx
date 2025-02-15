import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { TypographyProps } from "./types";
import { Text } from "./Text";


const headingVariants = cva("", {
    variants: {
        size: {
            xs: "text-heading-xs",
            sm: "text-heading-sm",
            md: "text-heading-md",
            lg: "text-heading-lg",
            xl: "text-heading-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});


type Props = TypographyProps & VariantProps<typeof headingVariants>

export const Heading = ({children, size, ...props}: Props) => {
    return (
        <Text className={cn(headingVariants({size}))} {...props}>{children}</Text>
    )
}