import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { onAuthStateChange } from "../services/firebase/auth";
import { updateSession } from "../store/slices/sessionSlice";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(
      (isLoading) => setIsLoading(isLoading),
      (session) => dispatch(updateSession(session))
    );
    return unsubscribe;
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return <>{children}</>;
};
