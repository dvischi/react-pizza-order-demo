import React, { useId } from "react";
import "@/styles/components/checkbox.scss"

interface CheckboxProps {
    className?: string;
    type?: "checkbox" | "radio";
    label: string;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: React.ChangeEventHandler;
}

export default function Checkbox ({
    className = "checkbox",
    type = "checkbox",
    label,
    name,
    value,
    defaultChecked,
    checked,
    onChange
}: CheckboxProps) {
    const inputId = useId();
    
    return (
        <div className={className}>
            <input id={inputId} type={type} onChange={onChange} name={name} value={value} checked={checked} defaultChecked={defaultChecked} />
            <label htmlFor={inputId}>{label}</label>
        </div>
    );
};
