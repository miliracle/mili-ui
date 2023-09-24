import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Support: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-3.333v.008"/><path d="M10 11.25a1.25 1.25 0 0 1 .833-1.25 2.167 2.167 0 1 0-2.5-3.333"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Support.displayName = `Mili.Icon.Support`;

Support.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Support;