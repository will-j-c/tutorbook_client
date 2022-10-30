import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import FilledButton from '../utils/buttons/FilledButton';
import RadioGroup from '../utils/radio/RadioGroup';
import { toast } from 'react-toastify';
import  axios  from '../../api/axios';

function Register(props) {
  const { setLoading } = props;
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [confirmPasswordText, setConfirmPasswordText] = useState('');
  const [userType, setUserType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const navigate = useNavigate();

  const form = {
    first_name: firstName,
    last_name: lastname,
    email: emailText.toLowerCase(),
    email_is_verified: false,
    user_type: userType
  };

  const validation = () => {
    const errors = [];
    // Passwords match
    if (!(passwordText === confirmPasswordText)) {
      errors.push('Passwords do not match');
    }
    // Valid email
    if (
      !emailText
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.push('Please enter a valid email');
    }
    // Password length and content
    if (!passwordText.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/)) {
      errors.push('Passwords must be 8 characters long and contain at least 1 number and 1 letter');
    }
    // All fields complete
    if (
      passwordText.length === 0 ||
      confirmPasswordText.length === 0 ||
      emailText.length === 0 ||
      firstName.length === 0 ||
      lastname.length === 0 ||
      userType.length === 0
    ) {
      errors.push('Please complete all fields');
    }
    return errors;
  };

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'firstName') {
      setFirstName(event.target.value);
      return;
    }
    if (event.target.name === 'lastName') {
      setLastName(event.target.value);
      return;
    }
    if (event.target.name === 'password') {
      setPasswordText(event.target.value);
      return;
    }
    if (event.target.name === 'confirmPassword') {
      setConfirmPasswordText(event.target.value);
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
    setLoading(true);

    const errors = validation();

    if (errors.length) {
      errors.forEach((error) => {
        toast.error(error);
      });
      setLoading(false);
      return;
    }

    try {
      const user = await axios.post('/users', form);
      await createUserWithEmailAndPassword(auth, emailText.toLowerCase(), passwordText);
      setLoading(false);
      toast.success('Account successfully created');
      navigate(`/users/${user.data.user_uuid}`);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
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
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="Last name"
              name="lastName"
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
                name="password"
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
                name="confirmPassword"
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
