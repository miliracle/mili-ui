import * as React from "react";
import cx from "classnames"
import "./icons.scss"
import { Classes, Colors } from "../../core";
import { uniqueId } from "../../utils/jsUtils";


export type SVGContainerProps = {
  className?: string;
  viewBox?: string;
  title?: string;
  style?: any;
  role?: string;
  color?: string;
  size?: number;
  children?: React.ReactNode;
}

const SVGContainer = React.forwardRef((props: SVGContainerProps, ref: React.Ref<SVGSVGElement>) => {
  const {
    className,
    viewBox = '0 0 20 20',
    size = 20,
    title,
    color = Colors.PRIMARY,
    children,
    ...rest
  } = props;

  const titleId = uniqueId("iconTitle");

  return (
    <svg
      aria-labelledby={title ? titleId : undefined}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      className={cx(Classes.ICON, className)}
      stroke={color}
      ref={ref}
      {...rest}
    >
      {title && <title id={titleId}>{title}</title>}
      {children}
    </svg>
  )
})
export default SVGContainer;
