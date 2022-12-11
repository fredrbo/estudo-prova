import { InputHTMLAttributes } from "react";
import { InputSld } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    width?: string;
    height?: string;
    value: string;
    type?: string;
  };
  

export function Input({value, onChange, placeholder, ...rest} : InputProps){
    return (
    <InputSld value={value}  onChange={onChange} placeholder={placeholder} type="text" />
    )
}