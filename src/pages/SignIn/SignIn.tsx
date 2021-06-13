import { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { LabelledInput } from "../../components/LabelledInput";
import { useTsSelector } from "../../hooks/useTsSelector";
import { signIn } from "../../services/firebase/auth";

export const SignIn = () => {
  const session = useTsSelector((state) => state.session);
  const [errorMesasge, setErrorMessage] = useState(null);

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    setErrorMessage(null);

    const { email, password } = event.target.elements;

    try {
      await signIn(email.value, password.value);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  if (session.token) {
    return <Redirect to="/" />;
  }

  return (
    <div className="h-screen w-screen bg-gray-100 text-gray-900 flex justify-center items-center min-w-sm">
      <div className="w-96">
        <div className="flex flex-col items-center p-10">
          <div className="w-14 m-4">
            <Logo />
          </div>
          <h2 className="text-2xl font-extrabold">Sign in to your account</h2>
          <h3 className="text-primary">Playtomic Technical Test</h3>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-10">
          <form className="flex flex-col" onSubmit={handleLogin}>
            <LabelledInput
              labelText="Email"
              name="email"
              id="email"
              type="email"
              autoComplete="off"
              placeholder="Type your email"
            />
            <LabelledInput
              labelText="Password"
              name="password"
              id="password"
              type="password"
              autoComplete="off"
              placeholder="Type your password"
            />

            <button
              type="submit"
              className={`bg-primary-light hover:bg-primary text-white 
              py-1 rounded outline-none focus:outline-none focus:shadow-lg transition-colors duration-200`}
            >
              Sign In
            </button>
            {errorMesasge && (
              <div className="mt-4 bg-red-100 py-1.5 px-2 text-sm text-red-700">
                {errorMesasge}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
