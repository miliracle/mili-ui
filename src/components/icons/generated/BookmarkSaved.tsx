import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const BookmarkSaved: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M7 2h6a2 2 0 0 1 2 2v14l-5-3-5 3V4a2 2 0 0 1 2-2Z"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

BookmarkSaved.displayName = `Mili.Icon.BookmarkSaved`;

BookmarkSaved.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default BookmarkSaved;