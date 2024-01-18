import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: string;
};

export default function TextField({
  label,
  name,
  type = 'text',
  register,
  error,
}: Props) {
  return (
    <div>
      <label className="text-black block uppercase text-sm" htmlFor="firstName">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          className="text-black w-full border-0 rounded-lg"
          {...register(name)}
        />
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
}
