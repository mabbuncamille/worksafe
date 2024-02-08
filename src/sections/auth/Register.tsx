import Select from '@/components/Select';
import TextField from '@/components/TextField';
import { useAuthContext } from '@/providers/auth-provider';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';

export type RegisterFormValuesProps = {
  fullName: string;
  email: string;
  password: string;
  role: string;
};

const registerSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  role: yup.string().required(),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValuesProps>({
    resolver: yupResolver(registerSchema),
  });
  const router = useRouter();

  const { registerUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const roles = [
    { id: 1, name: 'User' },
    { id: 2, name: 'Admin' },
  ];

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await registerUser(data.fullName, data.email, data.password, data.role);
      router.push({
        pathname: '/auth/checkEmail',
        query: {
          email: data.email,
        },
      });
    } catch (error: any) {
      if (error) {
        setError('email', { message: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-red-600 sm:border-yellow-400 md:border-cyan-500  lg:border-lime-500 border-4">
      <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="text-center text-gray-500">
          Already a member?
          <Link href={'/'} className="font-semibold leading-6 text-indigo-600">
            {' '}
            Log in
          </Link>
        </p>
      </div>

      <div className="max-w-sm sm:max-w-md p-6 bg-slate-100 rounded mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextField
            name="fullName"
            label="Full name"
            register={register}
            error={errors.fullName?.message}
          />

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

          <Select
            name="role"
            label="Role"
            options={roles}
            register={register}
          />

          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
      </div>
    </div>
  );
}
