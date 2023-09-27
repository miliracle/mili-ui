import React from "react";
import cx from "classnames";
import "./buttons.scss"
import { Classes } from "../../core";

const ButtonType = {
    PRIMARY: "primary" as "primary",
    SECONDARY: "secondary" as "secondary",
    TERTIARY: "tertiary" as "tertiary",
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];

interface CommonButtonProps {
    disabled?: boolean,
    buttonType: ButtonType,

}

interface ButtonProps extends CommonButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset'
}

type Ref = HTMLButtonElement

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>((props, ref) => {
    const { disabled, buttonType, ...restProps } = props
    const buttonClasses = [Classes.BUTTON]

    if(buttonType === ButtonType.PRIMARY) {
        buttonClasses.push(Classes.BUTTON_PRIMARY)
    } else if(buttonType === ButtonType.SECONDARY) {
        buttonClasses.push(Classes.BUTTON_SECONDARY)
    } else if(buttonType === ButtonType.TERTIARY) {
        buttonClasses.push(Classes.BUTTON_TERTIARY)
    }
    
    return (
        <button 
            ref={ref}
            disabled={disabled}
            className={cx(buttonClasses)}
            {...restProps}
        >
            {props.children}
        </button>
    )
})

Button.defaultProps = {
    buttonType: ButtonType.PRIMARY,
}

Button.displayName = `Mili.Button`;

export default Button