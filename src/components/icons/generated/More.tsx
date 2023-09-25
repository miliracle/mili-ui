import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const More: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><path d="M4.167 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm5.833 0a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm5.833 0a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

More.displayName = `Mili.Icon.More`;

More.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default More;
