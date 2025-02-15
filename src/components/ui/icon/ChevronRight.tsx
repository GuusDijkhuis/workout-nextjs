import { Size, SIZE_MAP } from "@/components/ui/icon/types"
import { type Color, COLOR_MAP } from "@/components/ui/icon/types"
import { cn } from "@/utils/cn";


type Props = {
    size?: Size
    color?: Color
}

export const ChevronRight = ({size = 'md', color = 'primary'}: Props) => (
    <svg className={cn(COLOR_MAP[color], SIZE_MAP[size])} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="currentColor"/>
    </svg>
)