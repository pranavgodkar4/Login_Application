import React, { useEffect, useState } from 'react';
interface radioProp{
    labelName:string,
    radioValues:string[],
    radioName:string,
    radiovalue:string,
    setValue:(val:string) => void,
    default?:string
}
const RadioButton:React.FC<radioProp> =(props) => {
  return (
     <div className="w-full max-w-sm mx-auto">
      <label className="block mb-1 text-sm text-gray-600">
        {props.labelName}
      </label>
      <div className="flex items-center space-x-6">
        {props.radioValues.map((option) => (
        
          <label key={option} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={props.radioName}
              value={option}
            //   checked={(props.radiovalue === option)}
              defaultChecked ={props.radiovalue === option}
              onChange={(e) => props.setValue(e.target.value)}
              className="text-gray-600 border-gray-300 focus:ring-gray-500 focus:ring-2"
            />
            <span className="text-gray-600">{option}</span>
          </label>
        ))}
      </div>
      </div>
  );
}

export default RadioButton;
