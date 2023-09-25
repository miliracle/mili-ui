import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const Grid: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M7.5 3.333H4.167a.833.833 0 0 0-.834.834V7.5c0 .46.373.833.834.833H7.5c.46 0 .833-.373.833-.833V4.167a.833.833 0 0 0-.833-.834Zm8.333 0H12.5a.833.833 0 0 0-.833.834V7.5c0 .46.373.833.833.833h3.333c.46 0 .834-.373.834-.833V4.167a.833.833 0 0 0-.834-.834ZM7.5 11.667H4.167a.833.833 0 0 0-.834.833v3.333c0 .46.373.834.834.834H7.5c.46 0 .833-.373.833-.834V12.5a.833.833 0 0 0-.833-.833Zm8.333 0H12.5a.833.833 0 0 0-.833.833v3.333c0 .46.373.834.833.834h3.333c.46 0 .834-.373.834-.834V12.5a.833.833 0 0 0-.834-.833Z"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Grid.displayName = `Mili.Icon.Grid`;

Grid.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};