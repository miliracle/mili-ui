import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

export const ChangePassword: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M14.167 9.167H5.833c-.92 0-1.666.746-1.666 1.666v5c0 .92.746 1.667 1.666 1.667h8.334c.92 0 1.666-.746 1.666-1.667v-5c0-.92-.746-1.666-1.666-1.666Z"/><path d="M10 14.167a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Zm-3.333-5V5a3.333 3.333 0 0 1 6.666 0"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

ChangePassword.displayName = `Mili.Icon.ChangePassword`;

ChangePassword.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};