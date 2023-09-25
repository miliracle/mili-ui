import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Buy: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M5 17.5a1.667 1.667 0 1 0 0-3.333A1.667 1.667 0 0 0 5 17.5Zm9.167 0a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z"/><path d="M14.167 14.167H5V2.5H3.333"/><path d="M5 4.167 16.667 5l-.834 5.833H5"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Buy.displayName = `Mili.Icon.Buy`;

Buy.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Buy;
