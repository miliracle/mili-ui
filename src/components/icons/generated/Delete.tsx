import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Delete: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M3.333 5.833h13.334M8.333 9.167v5m3.334-5v5m-7.5-8.334.833 10A1.667 1.667 0 0 0 6.667 17.5h6.666A1.667 1.667 0 0 0 15 15.833l.833-10m-8.333 0v-2.5a.833.833 0 0 1 .833-.833h3.334a.833.833 0 0 1 .833.833v2.5"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Delete.displayName = `Mili.Icon.Delete`;

Delete.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Delete;