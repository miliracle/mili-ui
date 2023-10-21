import React, { RefObject, useEffect } from "react";
import {useButton, AriaButtonProps} from '@react-aria/button';
import cx from "classnames";
import "./buttons.scss"
import { Classes } from "../../core";
import ButtonType from "./buttonTypes";


export interface ButtonProps extends AriaButtonProps {
    buttonType?: ButtonType,
    leftIcon?: JSX.Element | false | null | undefined,
    rightIcon?: JSX.Element | false | null | undefined,
}

type Ref = HTMLButtonElement

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>((props, ref) => {
    const { buttonType, leftIcon, rightIcon, children } = props
    const { buttonProps } = useButton(props, ref as RefObject<HTMLButtonElement>)
    useEffect(() => {
        console.log('buttonProps', buttonProps)
    }, [buttonProps])
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
            className={cx(buttonClasses)}
            {...buttonProps}
            ref={ref}
        >
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    )
})

Button.defaultProps = {
    buttonType: ButtonType.NONE,
}

Button.displayName = `Mili.Button`;

export default Button