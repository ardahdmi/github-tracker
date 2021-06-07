import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { GithubProvider } from '../context/context';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  console.log(process.env.DOMAIN_NAME);
  return (
    <UserProvider>
      <GithubProvider>
        <Component {...pageProps} />
      </GithubProvider>
    </UserProvider>
  );
}

export default MyApp;
