import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Calendar: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M15 4.167H5c-.92 0-1.667.746-1.667 1.666v10c0 .92.747 1.667 1.667 1.667h10c.92 0 1.667-.746 1.667-1.667v-10c0-.92-.747-1.666-1.667-1.666ZM13.333 2.5v3.333M6.667 2.5v3.333M3.333 9.167h13.334"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Calendar.displayName = `Mili.Icon.Calendar`;

Calendar.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Calendar;