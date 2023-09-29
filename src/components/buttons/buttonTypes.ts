const ButtonType = {
    NONE: "none" as "none",
    PRIMARY: "primary" as "primary",
    SECONDARY: "secondary" as "secondary",
    TERTIARY: "tertiary" as "tertiary",
    TEXT: "text" as "text",
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];

export default ButtonType;