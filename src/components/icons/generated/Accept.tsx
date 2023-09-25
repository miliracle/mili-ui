import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const Accept: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)">
        <g clip-path="url(#b)">
            <path d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"/>
            <path d="m7.5 10 1.667 1.667L12.5 8.333"/>
        </g>
    </g><defs>
        <clipPath id="a">
            <path d="M0 0h20v20H0z"/>
        </clipPath>
        <clipPath id="b">
            <path d="M0 0h20v20H0z"/>
        </clipPath>
    </defs>
    </SVGContainer>
  )
});

Accept.displayName = `Mili.Icon.Accept`;

Accept.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};