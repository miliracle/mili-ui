import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Refresh: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <path d="M16.667 9.167A6.75 6.75 0 0 0 3.75 7.5m-.417-3.333V7.5h3.334m-3.334 3.333A6.75 6.75 0 0 0 16.25 12.5m.417 3.333V12.5h-3.334"/>
    </SVGContainer>
  )
});

Refresh.displayName = `Mili.Icon.Refresh`;

Refresh.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Refresh;