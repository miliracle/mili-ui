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

const ButtonClasses = {
    BUTTON: `${NS}-button`,
    BUTTON_PRIMARY: `${NS}-button--primary`,
    BUTTON_SECONDARY: `${NS}-button--secondary`,
    BUTTON_TERTIARY: `${NS}-button--tertiary`,
}

const Classes = {
    ICON: `${NS}-icon`,
    ...TypoClasses,
    ...ButtonClasses
}

export default Classes;