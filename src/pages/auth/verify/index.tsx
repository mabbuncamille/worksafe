import axios from '@/utils/axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function VerifyPage() {
  const {
    query: { token },
  } = useRouter();

  useEffect(() => {
    async function fetchToken() {
      try {
        await axios.post('/api/auth/verify', { token });
      } catch (error) {
        console.log(error, 'ERROR');
      }
    }

    if (token && token?.length > 0) {
      console.log(token, 'TOKEN');
      fetchToken();
    }
  }, [token]);

  return (
    <>
      <h1>VERIFY YOUR EMAIL ADDRESS</h1>
    </>
  );
}
