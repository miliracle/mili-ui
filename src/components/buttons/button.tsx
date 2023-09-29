import React from "react";
import cx from "classnames";
import "./buttons.scss"
import { Classes } from "../../core";
import ButtonType from "./buttonTypes";

interface CommonButtonProps {
    disabled?: boolean,
    buttonType?: ButtonType,
    leftIcon?: JSX.Element | false | null | undefined,
    rightIcon?: JSX.Element | false | null | undefined,
    loading?: boolean,
}

interface ButtonProps extends CommonButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset'
}

type Ref = HTMLButtonElement

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>((props, ref) => {
    const { disabled, buttonType, leftIcon, rightIcon, children, ...restProps } = props
    const buttonClasses = [Classes.BUTTON]

    if(buttonType === ButtonType.PRIMARY) {
        buttonClasses.push(Classes.BUTTON_PRIMARY)
    } else if(buttonType === ButtonType.SECONDARY) {
        buttonClasses.push(Classes.BUTTON_SECONDARY)
    } else if(buttonType === ButtonType.TERTIARY) {
        buttonClasses.push(Classes.BUTTON_TERTIARY)
    } else if(buttonType === ButtonType.TEXT) {
        buttonClasses.push(Classes.BUTTON_TEXT)
    }
    
    if(leftIcon || !children) {
        buttonClasses.push(Classes.BUTTON_LEFT_ICON)
    }
    if(rightIcon || !children) {
        buttonClasses.push(Classes.BUTTON_RIGHT_ICON)
    }

    return (
        <button 
            ref={ref}
            disabled={disabled}
            className={cx(buttonClasses)}
            {...restProps}
        >
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    )
})

Button.defaultProps = {
    buttonType: ButtonType.NONE,
    loading: false,
    disabled: false,
}

Button.displayName = `Mili.Button`;

export default Button