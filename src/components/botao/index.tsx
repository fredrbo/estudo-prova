import { ButtonHTMLAttributes } from "react";
import { ButtonSld } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLInputElement> & {
    onClick?: any;
    text?: string;
};

export function Button({text, onClick , ...rest }: ButtonProps) {
    return <ButtonSld onClick={onClick} >{text}</ButtonSld>
}