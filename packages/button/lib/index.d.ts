export declare enum Size {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare enum Skin {
    Normal = "normal",
    Primary = "primary",
    Secondary = "secondary",
    Positive = "positive",
    Destructive = "destructive",
    OutlineLight = "outlineLight",
    OutlineDark = "outlineDark"
}
export interface Props {
    className?: string;
    size?: Size;
    skin?: Skin;
}
export declare const Button: import("styled-components").StyledComponent<"button", any, {
    className: string;
    size: Size;
    skin: Skin;
}, "size" | "className" | "skin">;
