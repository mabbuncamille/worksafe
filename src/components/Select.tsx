import { UseFormRegister } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  options?: {
    id: number;
    name: string;
  }[];
  register: UseFormRegister<any>;
};

export default function Select({ name, label, options, register }: Props) {
  return (
    <div>
      <label className="text-black block text-sm" htmlFor="firstName">
        {label}
      </label>
      <div className="mt-2">
        <select
          id={String(name)}
          className="w-full border-0 rounded-lg"
          {...register(name)}
        >
          {options?.map((opt) => (
            <option key={opt.id} value={Number(opt.id)}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
