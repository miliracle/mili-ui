import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const LogOut: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M11.667 6.667V5A1.667 1.667 0 0 0 10 3.333H4.167A1.667 1.667 0 0 0 2.5 5v10a1.667 1.667 0 0 0 1.667 1.667H10A1.667 1.667 0 0 0 11.667 15v-1.667M5.833 10H17.5m0 0L15 7.5m2.5 2.5L15 12.5"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

LogOut.displayName = `Mili.Icon.LogOut`;

LogOut.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};