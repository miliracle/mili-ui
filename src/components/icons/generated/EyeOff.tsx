import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const EyeOff: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <path d="m2.5 2.5 15 15M8.82 8.823a1.667 1.667 0 0 0 2.357 2.358"/><path d="M14.464 14.457c-1.359.917-2.846 1.376-4.464 1.376-3.333 0-6.11-1.944-8.333-5.833 1.14-1.996 2.427-3.48 3.86-4.45m2.276-1.08A7.888 7.888 0 0 1 10 4.168c3.333 0 6.11 1.944 8.333 5.833-.648 1.134-1.343 2.103-2.085 2.907L7.802 4.47Z"/>
    </SVGContainer>
  )
});

EyeOff.displayName = `Mili.Icon.EyeOff`;

EyeOff.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};