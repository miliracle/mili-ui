import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const SortIncrease: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><path d="m8.3 6.609 2.575 2.256c.267.235.078.635-.3.635h-5.15c-.378 0-.567-.4-.3-.635L7.7 6.61a.468.468 0 0 1 .6 0Z" opacity=".6"/></g><defs><clipPath id="a"><path d="M0 0h16v16H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

SortIncrease.displayName = `Mili.Icon.SortIncrease`;

SortIncrease.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};