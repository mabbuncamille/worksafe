import RHFTextField from '@/components/hook-form/RHFTextField';
import { paths } from '@/routes/paths';
import { useForm, FormProvider } from 'react-hook-form';

export default function Login() {
  const methods = useForm();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...methods}>
          <form action="#" className="space-y-6">
            <RHFTextField name="email" label="Email" type="email" />
            <RHFTextField
              name="password"
              label="Password"
              type="password"
              rightLabel="Forgot Password?"
            />

            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </FormProvider>

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
