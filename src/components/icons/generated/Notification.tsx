import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Notification: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M8.333 4.167a1.667 1.667 0 0 1 3.334 0 5.833 5.833 0 0 1 3.333 5v2.5a3.333 3.333 0 0 0 1.667 2.5H3.333A3.334 3.334 0 0 0 5 11.667v-2.5a5.833 5.833 0 0 1 3.333-5m-.833 10V15a2.5 2.5 0 0 0 5 0v-.833"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Notification.displayName = `Mili.Icon.Notification`;

Notification.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Notification;
