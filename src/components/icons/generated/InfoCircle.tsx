import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const InfoCircle: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><path d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-10.833h.008"/><path d="M9.167 10H10v3.333h.833"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

InfoCircle.displayName = `Mili.Icon.InfoCircle`;

InfoCircle.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};