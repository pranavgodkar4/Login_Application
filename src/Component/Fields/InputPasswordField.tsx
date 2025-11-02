import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface inputProp {
    labelName: string,
    inputName: string,
    placeHolder?: string,
    type?: string,
    default?:string
}

export const InputPasswordField: React.FC<inputProp> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <label className="block mb-1 text-sm text-gray-600">{props.labelName}</label>
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    id={props.inputName}
                    name={props.inputName}
                    defaultValue={props.default}
                    placeholder={props.placeHolder}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"

                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                >
                    {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                        <EyeIcon className="h-5 w-5" />
                    )}
                </button>
            </div>
        </>
    )
}