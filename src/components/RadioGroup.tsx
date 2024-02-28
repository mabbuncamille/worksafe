import { UseFormRegister } from 'react-hook-form';

type RadioProps = {
  name: string;
  id: string;
  label: string;
  floors?: string[];
};

type RadioGroupProps = {
  value: RadioProps[];
  register: UseFormRegister<any>;
};

export default function RadioGroup({ value, register }: RadioGroupProps) {
  return (
    <div className="flex flex-wrap">
      {value.map((list, index) => (
        <div key={index} className="mr-2 mb-2">
          <input
            type="radio"
            id={list.id}
            value={list.id}
            className="hidden peer"
            {...register(list.name)}
          />

          <label
            htmlFor={list.id}
            className="border text-black bg-white text-md relative cursor-pointer inline-flex border-gray-200 rounded-md hover:bg-gray-100 peer-checked:text-white peer-checked:bg-primary w-20 py-2 justify-center"
          >
            {list.label}
          </label>
        </div>
      ))}
    </div>
  );
}
