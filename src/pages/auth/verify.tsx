import axios from '@/utils/axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdError, MdMarkEmailRead } from 'react-icons/md';

export default function VerifyPage() {
  const {
    query: { token },
    push,
  } = useRouter();
  const [isTokenVerified, setIsTokenVerified] = useState<boolean | null>(null);
  console.log(isTokenVerified, 'isTokenVerified');

  useEffect(() => {
    async function fetchToken() {
      try {
        await axios.post('/api/auth/verify', { token });
        setIsTokenVerified(true);
      } catch (error) {
        setIsTokenVerified(false);
        console.log(error, 'ERROR');
      }
    }

    if (token && token?.length > 0) {
      fetchToken();
    }
  }, [token]);

  const gotoHomePage = (e: any) => {
    e.preventDefault();
    push('/');
  };

  const resendVerification = async (e: any) => {
    e.preventDefault();

    try {
      axios.post('/api/auth/resendVerification', { token });
      push('/auth/checkEmail');
    } catch (error) {
      console.log('ERROOOOOR');
    }
  };

  if (isTokenVerified === null) {
    return <div>Loading....</div>;
  }

  return (
    <>
      {isTokenVerified ? (
        <div className="bg-slate-100 rounded sm:max-w-md mx-auto p-10 mt-10 items-center flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Verified!</h1>
          <MdMarkEmailRead className="text-violet-900 text-8xl" />
          <p>You have successfully verified account.</p>
          <button
            className="uppercase text-white bg-violet-900 rounded px-8 py-3
          "
            onClick={gotoHomePage}
          >
            Login to your account
          </button>
        </div>
      ) : (
        <div className="bg-slate-100 rounded sm:max-w-md mx-auto p-10 mt-10 items-center flex flex-col gap-8">
          <h1 className="text-2xl font-bold">
            Email verification link expired
          </h1>
          <MdError className="text-violet-900 text-8xl" />
          <p>
            Looks like the verification link has expired. Not to worry, we can
            send the link again.
          </p>
          <button
            className="uppercase text-white bg-violet-900 rounded px-8 py-3
      "
            onClick={resendVerification}
          >
            Resend verification link
          </button>
        </div>
      )}
    </>
  );
}
