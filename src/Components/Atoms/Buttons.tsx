import React from 'react'

export enum ButtonThemes {
    Danger = "Danger",
    Caution = "Caution",
    Success = "Success",
    Info = "Info",
    Basic = "Basic"
}

export enum ButtonSizes {
    Large = "Large",
    Medium = "Medium",
    Small = "Small",
    Xsmall = "Xsmall"
}

export enum ButtonModifiers {
    Outline = "Outline",
    Disabled = "Disabled"
}

export interface BasicButtonProps {
    theme: keyof typeof ButtonThemes,
    text: string,
    size: keyof typeof ButtonSizes,
    action?: (any?: any) => void
}

export default function BasicButton({ theme = ButtonThemes.Basic, text, size, action }: BasicButtonProps) {
    let selectedTheme = ""
    switch (theme) {
        case ButtonThemes.Success:
            selectedTheme = ""
            break;
        case ButtonThemes.Caution:
            selectedTheme = ""
            break;
        case ButtonThemes.Danger:
            selectedTheme = ""
            break;
        case ButtonThemes.Info:
            selectedTheme = "bg-blue-500 font-bold text-white hover:bg-blue-700 active:bg-blue-900"
            break;
        case ButtonThemes.Basic:
            selectedTheme = "bg-indigo-500 font-bold text-white hover:bg-indigo-700 active:bg-indigo-900"
            break;
    }

    let selectedSize = ""
    switch (size) {
        case ButtonSizes.Large:
            selectedSize = "px-16 py-4 rounded-md"
            break;
        case ButtonSizes.Medium:
            selectedSize = "px-8 py-2 rounded-lg"
            break;
        case ButtonSizes.Small:
            selectedSize = "px-4 py-2 rounded-xl"
            break;
        case ButtonSizes.Xsmall:
            selectedSize = "px-2 py-1 rounded-2xl"
            break;
    }
    
    return (
        <button className={`${selectedTheme} ${selectedSize}`} onClick={action}>
            <p>{text}</p>
        </button>
    )
}
