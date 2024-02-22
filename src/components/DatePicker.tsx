import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { FaCalendarDay } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerComponentProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
  label: string;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

export default function DatePicker({
  selectedDate,
  onChange,
  label,
}: DatePickerComponentProps) {
  const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <div className="relative">
        <input
          id="calendar-input"
          ref={ref}
          type="text"
          value={value}
          onClick={onClick}
          className="border"
          readOnly
        />
        <div className="absolute inset-y-0 right-2 flex items-center ps-3.5 pointer-events-none">
          <FaCalendarDay />
        </div>
      </div>
    )
  );

  CustomInput.displayName = 'CustomInput';

  return (
    <div className="flex flex-col">
      <label
        htmlFor="calendar-input"
        className="font-bold text-sm uppercase mb-2"
      >
        {label}
      </label>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => onChange(date as Date)}
        customInput={<CustomInput />}
      />
    </div>
  );
}
