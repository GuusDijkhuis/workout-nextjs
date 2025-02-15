import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { TypographyProps } from "./types";
import { Text } from "./Text";


const phraseVariants = cva("", {
    variants: {
        size: {
            xs: "text-body-xs",
            sm: "text-body-sm",
            md: "text-body-md",
            lg: "text-body-lg",
            xl: "text-body-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});


type Props = TypographyProps & VariantProps<typeof phraseVariants>

export const Phrase = ({children, size, ...props}: Props) => {
    return (
        <Text className={cn(phraseVariants({size}))} {...props}>{children}</Text>
    )
}