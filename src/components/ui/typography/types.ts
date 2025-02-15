import { ClassValue } from "clsx"
import { ReactNode } from "react"

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'

export type TypographyProps = {
    underline?: boolean
    uppercase?: boolean
    fontWeight?: FontWeight
    italic?: boolean
    className?: ClassValue
    children: ReactNode
    center?: boolean
}