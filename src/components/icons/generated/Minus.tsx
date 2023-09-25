import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const Minus: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><path d="M4.167 10h11.666"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Minus.displayName = `Mili.Icon.Minus`;

Minus.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};