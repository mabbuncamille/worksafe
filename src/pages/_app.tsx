import { AuthProvider } from '@/providers/auth-provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto_Flex } from 'next/font/google';

const primaryFont = Roboto_Flex({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-roboto-flex',
});

export default function App({ Component, pageProps }: AppProps) {
  console.log('APP');

  return (
    <AuthProvider>
      <div className={`${primaryFont.className}`}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
