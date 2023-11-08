let NS = 'mili'

const TypoClasses = {
    HEADING: `${NS}-heading`,
    SUBTITLE: `${NS}-subtitle`,
    BODY_LARGE: `${NS}-body-large`,
    BODY_REGULAR: `${NS}-body-regular`,
    CAPTION: `${NS}-caption`,
    LINK: `${NS}-link`,
    LINK_SMALL: `${NS}-link-small`,
}

const CommonClasses = {
    DISABLED: `${NS}-disabled`,
}

const ButtonClasses = {
    BUTTON: `${NS}-button`,
    BUTTON_PRIMARY: `${NS}-button--primary`,
    BUTTON_SECONDARY: `${NS}-button--secondary`,
    BUTTON_TERTIARY: `${NS}-button--tertiary`,
    BUTTON_TEXT: `${NS}-button--text`,
    BUTTON_LEFT_ICON: `${NS}-button--left-icon`,
    BUTTON_RIGHT_ICON: `${NS}-button--right-icon`,
}

const Classes = {
    ICON: `${NS}-icon`,
    ...TypoClasses,
    ...ButtonClasses,
    ...CommonClasses,
}

export default Classes;