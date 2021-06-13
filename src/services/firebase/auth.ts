import jwt_decode from "jwt-decode";

import { SessionState } from "../../store/slices/sessionSlice";
import { auth } from "./setup";

interface JWToken {
  name?: string;
  auth_time: number;
  email: string;
  user_id: string;
}

export const signIn = async (email: string, password: string) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

export const signOut = async () => {
  return await auth.signOut();
};

export const onAuthStateChange = (
  setIsLoading: (isLoading: boolean) => void,
  setSession: (session: SessionState) => void
) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) {
      setIsLoading(false);
      setSession({ user: null });
      return;
    }

    user.getIdToken().then((token) => {
      const decoded = jwt_decode<JWToken>(token);

      const session = {
        token: token,
        user: {
          name: decoded.name,
          email: decoded.email,
          userId: decoded.user_id,
          authTime: decoded.auth_time,
        },
      };

      setSession(session);
      setIsLoading(false);
    });
  });

  return unsubscribe;
};
