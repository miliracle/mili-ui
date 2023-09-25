import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const Contract: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M11.667 2.5v3.333a.833.833 0 0 0 .833.834h3.333"/><path d="M14.167 17.5H5.833a1.667 1.667 0 0 1-1.666-1.667V4.167A1.667 1.667 0 0 1 5.833 2.5h5.834l4.166 4.167v9.166a1.666 1.666 0 0 1-1.666 1.667ZM7.5 7.5h.833M7.5 10.833h5m-5 3.334h5"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Contract.displayName = `Mili.Icon.Contract`;

Contract.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};