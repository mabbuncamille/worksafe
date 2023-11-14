import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  type?: string;
  rightLabel?: string;
};

export default function RHFTextField({
  name,
  label,
  type = 'text',
  rightLabel,
}: Props) {
  const { register } = useFormContext();

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {rightLabel && (
          <div className="font-semibold text-indigo-600 hover:text-indigo-500">
            <a href="#">{rightLabel}</a>
          </div>
        )}
      </div>
      <div>
        <input
          type={type}
          id={name}
          //name={name}
          {...register(name)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
