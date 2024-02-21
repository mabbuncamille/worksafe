import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

type TextFieldProps = {
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
}: TextFieldProps) {
  return (
    <div>
      <label
        className="text-black block text-sm uppercase font-semibold"
        htmlFor="firstName"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          className={`text-black w-full rounded-lg ${
            error ? 'border-red-500' : 'border-0'
          }`}
          {...register(name)}
        />
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
}
