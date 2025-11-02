import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface inputProp {
    labelName: string,
    inputName: string,
    placeHolder?: string,
    type?: string,
    default?:string
}

const Input: React.FC<inputProp> = (props) => {
    

    return (
        <>
            <label className="block mb-1 text-sm text-gray-600">{props.labelName}</label>
            <input
                name={props.inputName}
                type={props.type || "text"}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={props.placeHolder}
                defaultValue={props.default}
            />
        </>
    );
}

export default Input;