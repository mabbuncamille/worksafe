import RHFTextField from '@/components/hook-form/RHFTextField';
import { useRouter } from '@/routes/hooks/use-router';
import { paths } from '@/routes/paths';
// import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';

export default function Register() {
  const router = useRouter();
  const methods = useForm();

  const { handleSubmit } = methods;

  async function addNewUser(data: any) {
    await fetch('../api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    }).then((response) => {
      console.log(response, 'RES');
      router.push('/');
    });
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="text-center text-gray-500">
          Already a member?
          <a href="#" className="font-semibold leading-6 text-indigo-600">
            {' '}
            Log in
          </a>{' '}
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...methods}>
          <form
            className="space-y-6"
            onSubmit={handleSubmit((data) => {
              const { fullname, username, email, password } = data;
              addNewUser({
                fullname,
                username,
                email,
                password,
                role_id: 3, //Temporary: Email Verification Feature
                status: 2, //Temporary: Email Verification Feature
                date_created: new Date().toISOString().split('T')[0],
              });
            })}
          >
            <RHFTextField name="fullname" label="Full name" />
            <RHFTextField name="username" label="Username" />
            <RHFTextField name="email" label="Email" type="email" />
            <RHFTextField name="password" label="Password" type="password" />

            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
              type="submit"
            >
              Create account
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
