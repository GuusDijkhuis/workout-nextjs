import {
  type Size,
  type Color,
  type IconName,
  ICON_MAP,
} from "@/components/icon/types";

type Props = {
  color?: Color;
  name: IconName;
  size?: Size;
};

export const Icon = ({ name, ...props }: Props) => {
  const Component = ICON_MAP[name];

  return <Component {...props} />;
};
