import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthAction } from "./authAction";

const initialState = {
  profile: {},
  isLoggedIn: false,
  token: null,
  loading: false,
};

export const useAuthStore = create(
  persist(
    (set, get, store) => ({
      ...initialState,
      ...AuthAction(set, get),
      clearSession: async () => {
        store.setState(initialState);
      },
    }),
    {
      name: "auth-store",
      version: 1,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
