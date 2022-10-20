import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import FilledButton from '../utils/buttons/FilledButton';
import RadioGroup from '../utils/radio/RadioGroup';

function Register() {
  const authUser = auth;
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [user, setUser] = useState('');
  const [userType, setUserType] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target)
    if (event.target.type === 'password') {
      setPasswordText(event.target.value);
      return;
    }
    if (event.target.type === 'email') {
      setEmailText(event.target.value);
      return;
    }
    if (event.target.type === 'radio') {
        setUserType(event.target.name);
        return;
    }
  };

  const register = async () => {
    try {
      //   const user = await signInWithEmailAndPassword(auth, emailText, passwordText)
      //   console.log(user)
      //   setUser(user)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-titleText">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create account</h1>

        <p className="mt-4">
          Already have an account?{' '}
          <span className="text-secondaryTitleText">
            <Link>Login</Link>
          </span>
        </p>
      </div>

      <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="First name"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="Last name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="Enter email"
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          {/* passwords */}
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
                placeholder="Enter password"
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
                placeholder="Confirm password"
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <RadioGroup handleChange={handleChange} />

        <div className="flex column items-center flex-col justify-between">
          <FilledButton label="Register" action={register} />
        </div>
      </form>
    </div>
  );
}

export default Register;
