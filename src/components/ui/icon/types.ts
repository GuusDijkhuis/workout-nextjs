import { ChevronRight } from "@/components/ui/icon/ChevronRight";

export const SIZE_MAP = {
  xs: "h-2 w-2",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

export type Size = keyof typeof SIZE_MAP;

export const COLOR_MAP = {
  danger: "text-danger-400 fill-current",
  dark: "text-dark-400 fill-current",
  grey: "text-grey-400 fill-current",
  info: "text-info-400 fill-current",
  primary: "text-primary-400 fill-current",
  success: "text-success-400 fill-current",
  warning: "text-warning-400 fill-current",
  white: "text-white fill-current",
};

export type Color = keyof typeof COLOR_MAP;

export const ICON_MAP = {
  "chevron-right": ChevronRight,
};

export type IconName = keyof typeof ICON_MAP;
