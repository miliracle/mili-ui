import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const SortDecrease: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><path d="m8.3 9.391 2.575-2.256c.267-.235.078-.635-.3-.635h-5.15c-.378 0-.567.4-.3.635L7.7 9.39a.468.468 0 0 0 .6 0Z" opacity=".6"/></g><defs><clipPath id="a"><path d="M0 0h16v16H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

SortDecrease.displayName = `Mili.Icon.SortDecrease`;

SortDecrease.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default SortDecrease;
