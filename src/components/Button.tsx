type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ children, disabled = false }: ButtonProps) {
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  return (
    <button
      className={`flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 ${disabledClasses}`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
