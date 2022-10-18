import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import FilledButton from '../buttons/FilledButton';

function Login() {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const { loginWithRedirect } = useAuth0();
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.type === 'password') {
      setPasswordText(event.target.value);
      return;
    }
    if (event.target.type === 'email') {
      setEmailText(event.target.value);
      return;
    }
  };

  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-titleText">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Login</h1>

        <p class="mt-4">
          Don't have an account?{' '}
          <span className="text-secondaryTitleText">
            <Link>Register</Link>
          </span>
        </p>
      </div>

      <form class="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <div class="relative">
            <input
              type="email"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="Enter email"
              onChange={handleChange}
            />

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <div class="relative">
            <input
              type="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="Enter password"
              onChange={handleChange}
            />

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="flex column items-center flex-col justify-between">
          <FilledButton label="Login" action={() => loginWithRedirect()} />
          <p class="mt-4 text-center md:text-left">
            Forgotten password?{' '}
            <span className="text-secondaryTitleText block md:inline">
              <Link>Password reset</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
