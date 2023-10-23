import React, { RefObject } from "react";
import {useButton, AriaButtonProps} from '@react-aria/button';
import cx from "classnames";
import "./buttons.scss"
import { Classes } from "../../core";
import ButtonType from "./buttonTypes";


interface CommonButtonProps {
    buttonType?: ButtonType,
    leftIcon?: JSX.Element | false | null | undefined,
    rightIcon?: JSX.Element | false | null | undefined,
    tabIndex?: number,
}

export interface ButtonProps extends CommonButtonProps, AriaButtonProps<'button'> {}
export interface AnchorButtonProps extends CommonButtonProps, AriaButtonProps<'a'> {}

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const sharedButtonProps = useSharedButtonProps(props)
    const { buttonProps } = useButton(props, ref as RefObject<HTMLButtonElement>)    
    return (
        <button 
            {...sharedButtonProps}
            {...buttonProps}
            ref={ref}
        >
            {renderButtonContents(props)}
        </button>
    )
})

Button.defaultProps = {
    buttonType: ButtonType.NONE,
}

Button.displayName = `Mili.Button`;

const AnchorButton: React.FC<ButtonProps> = React.forwardRef<HTMLAnchorElement, ButtonProps>((props, ref) => {
    const sharedButtonProps = useSharedButtonProps(props)
    const { buttonProps } = useButton(props, ref as RefObject<HTMLAnchorElement>)    
    return (
        <a 
            {...sharedButtonProps}
            {...buttonProps}
            href={props.href}
            target={props.target}
            role="button"
            ref={ref}
        >
            {renderButtonContents(props)}
        </a>
    )
})

AnchorButton.defaultProps = {
    buttonType: ButtonType.NONE,
}

AnchorButton.displayName = `Mili.AnchorButton`;

function useSharedButtonProps(props: ButtonProps) {
    const { buttonType, leftIcon, rightIcon, children, isDisabled, tabIndex } = props
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

    return {
        className: cx(buttonClasses),
        tabIndex: isDisabled ? -1 : tabIndex,
    }
}

function renderButtonContents(props: ButtonProps) {
    const { leftIcon, rightIcon, children } = props
    return (
        <>
            {leftIcon}
            {children}
            {rightIcon}
        </>
    )
}

export {
    Button,
    AnchorButton
}