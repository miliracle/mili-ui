import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const EyeOn: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <path d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path d="M18.333 10c-2.222 3.89-5 5.833-8.333 5.833S3.89 13.89 1.667 10c2.222-3.89 5-5.833 8.333-5.833S16.11 6.11 18.333 10Z"/>
    </SVGContainer>
  )
});

EyeOn.displayName = `Mili.Icon.EyeOn`;

EyeOn.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default EyeOn;
