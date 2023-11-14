import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Login from '@/sections/auth/Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login | Worksafe</title>
      </Head>

      <Login />
    </div>
  );
}
