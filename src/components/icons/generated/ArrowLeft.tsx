import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const ArrowLeft: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><g clip-path="url(#c)"><path d="m12.5 5-5 5 5 5"/></g></g></g><defs><clipPath id="a"><path d="M0 0h19.999v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h19.999v20H0z"/></clipPath><clipPath id="c"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

ArrowLeft.displayName = `Mili.Icon.ArrowLeft`;

ArrowLeft.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};