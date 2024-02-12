import { paths } from '@/routes/paths';
import { useRouter } from '@/routes/hooks/use-router';
import { useForm } from 'react-hook-form';
import Alert from '@/components/Alert';
import TextField from '@/components/TextField';
import { useAuthContext } from '@/providers/auth-provider';
import { useState } from 'react';

export type LoginFormValuesProps = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValuesProps>();
  const router = useRouter();
  const { login } = useAuthContext();
  const [showError, setShowError] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await login(data.email, data.password);
      router.push('/home');
    } catch (error: any) {
      setShowError(true);
      console.log(error, 'ERROR');
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 sm:max-w-md sm:mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      {showError && (
        <Alert type="error" message="Invalid username and/or password." />
      )}

      <div className="mt-10 sm:w-full bg-slate-100 p-6 rounded">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="email"
            label="Email"
            register={register}
            error={errors.email?.message}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
            type="submit"
          >
            Sign in
          </button>
        </form>

        <p className="mt-10 text-center text-gray-500">
          Don&#39;t have an account?{' '}
          <a
            href={paths.auth.register}
            className="font-semibold leading-6 text-indigo-600"
          >
            Sign up
          </a>{' '}
        </p>
      </div>
    </div>
  );
}
