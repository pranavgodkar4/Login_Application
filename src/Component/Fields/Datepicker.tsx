import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerFields{
    label:string;
    onChange: (date: Date | null) => void;
    selectedDate:Date|null
}

const Datepicker:React.FC<DatePickerFields> =(props) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {props.label}
      </label>
      <div className="w-full relative">
        <DatePicker
          selected={props.selectedDate} 
          onChange={props.onChange}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          placeholderText="Choose a date"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default Datepicker;
