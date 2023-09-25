import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const AddPlus: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><g clip-path="url(#c)"><path d="M10 4.167v11.666M4.167 10h11.666"/></g></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="c"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

AddPlus.displayName = `Mili.Icon.AddPlus`;

AddPlus.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};