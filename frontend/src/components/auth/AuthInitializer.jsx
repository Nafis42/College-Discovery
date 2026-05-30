import { useEffect } from "react";

import { getMe } from "../../api/auth.api";
import { getSavedColleges } from "../../api/saved.api";

import useAuthStore from "../../store/useAuthStore";
import useSavedStore from "../../store/useSavedStore";

const AuthInitializer = () => {
  const {
    token,
    setUser,
    logout,
  } = useAuthStore();

  const { setSavedIds } =
    useSavedStore();

  useEffect(() => {
    const initializeAuth =
      async () => {
        try {
          if (!token) return;

          const userResponse =
            await getMe();

          setUser(
            userResponse.data.user
          );

          const savedResponse =
            await getSavedColleges();

          setSavedIds(
            savedResponse.data.colleges.map(
              (college) =>
                college.id
            )
          );
        } catch (error) {
          console.error(error);

          logout();
        }
      };

    initializeAuth();
  }, [
    token,
    setUser,
    logout,
    setSavedIds,
  ]);

  return null;
};

export default AuthInitializer;