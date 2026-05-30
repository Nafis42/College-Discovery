import { useEffect } from "react";

import { getMe } from "../../api/auth.api";

import useAuthStore from "../../store/useAuthStore";

const AuthInitializer = () => {
  const {
    token,
    setUser,
    logout,
  } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!token) return;

        const response =
          await getMe();

        setUser(
          response.data.user
        );
      } catch (error) {
        console.error(error);

        logout();
      }
    };

    fetchUser();
  }, [token]);

  return null;
};

export default AuthInitializer;
