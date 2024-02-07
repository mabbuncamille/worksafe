import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/solid';

type AlertProps = {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
};

const icons = {
  info: <InformationCircleIcon className="h-6 w-6 mr-3" />,
  success: <CheckCircleIcon className="h-6 w-6 mr-3" />,
  warning: <ExclamationTriangleIcon className="h-6 w-6 mr-3" />,
  error: <ShieldExclamationIcon className="h-6 w-6 mr-3" />,
};

export default function Alert({ type, message }: AlertProps) {
  const typeClasses = {
    info: 'bg-blue-100 text-blue-950',
    success: 'bg-green-100 text-green-900',
    warning: 'bg-yellow-100 text-yellow-900',
    error: 'bg-red-100 text-red-900',
  };

  return (
    <div className={`flex px-4 py-2 rounded-lg ${typeClasses[type]}`}>
      {icons[type]}
      <div>{message}</div>
    </div>
  );
}
