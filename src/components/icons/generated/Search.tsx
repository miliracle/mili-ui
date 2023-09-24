import React from "react";
import SVGContainer from "../svgContainer";
import IconProps from "../iconProps";
import { IconSize } from "../IconTypes";
import { Colors } from "../../../core";

const Search: React.FC<IconProps> = React.forwardRef((props: IconProps, ref: React.Ref<SVGSVGElement>) => {
  return (
    <SVGContainer {...props} ref={ref}>
        <g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M8.333 14.167a5.833 5.833 0 1 0 0-11.667 5.833 5.833 0 0 0 0 11.667ZM17.5 17.5l-5-5"/></g></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath><clipPath id="b"><path d="M0 0h20v20H0z"/></clipPath></defs>
    </SVGContainer>
  )
});

Search.displayName = `Mili.Icon.Search`;

Search.defaultProps = {
    viewBox: "0 0 20 20",
    size: IconSize.STANDARD,
    color: Colors.PRIMARY
};

export default Search;