import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const Check: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><path d="m3.333 8 3.334 3.333 6.666-6.666"/></g><defs><clipPath id="a"><path d="M0 0h16v16H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Check.displayName = `Mili.Icon.Check`;

Check.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};