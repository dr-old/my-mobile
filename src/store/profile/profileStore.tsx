import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProfileAction } from "./profileAction";

const initialState = {
  profile: {},
  profileImage: [],
  loading: false,
};

export const useProfileStore = create(
  persist(
    (set, get, store) => ({
      ...initialState,
      ...ProfileAction(set, get),
    }),
    {
      name: "profile-store",
      version: 1,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
