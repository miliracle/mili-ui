import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Loader: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <path d="M10 5V2.5m3.542 3.958 1.791-1.791M15 10h2.5m-3.958 3.542 1.791 1.791M10 15v2.5m-3.542-3.958-1.791 1.791M5 10H2.5m3.958-3.542L4.667 4.667"/>
    </SVGContainer>
  )
});

Loader.displayName = `Mili.Icon.Loader`;

Loader.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Loader;
