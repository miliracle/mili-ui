import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Decline: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1.667-9.167-3.334 3.334m0-3.334 3.334 3.334-3.334-3.334Z"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Decline.displayName = `Mili.Icon.Decline`;

Decline.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Decline;