import { useRouter } from 'next/router';
import { MdEmail } from 'react-icons/md';

export default function CheckEmailPage() {
  const {
    query: { email },
  } = useRouter();

  return (
    <div className="bg-slate-100 rounded sm:max-w-md mx-auto p-10 mt-10 items-center flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Check Your Email</h1>
      <MdEmail className="text-violet-900 text-8xl" />
      <p>Verify your email address to use your account.</p>
      <p>
        {`We sent an email to ${email} with a button to verify your eail address`}
        .
      </p>
    </div>
  );
}
