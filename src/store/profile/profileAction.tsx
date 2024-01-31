import api from "@/services/api";
import { failedResponsePayload, successResponsePayload } from "@/utils/helpers";
import { produce } from "immer";
export const ProfileAction = (set: any, get: any) => {
  return {
    createProfile: async (params: any) => {
      try {
        const res: any = await api.createProfile(params);
        if (res?.ok) {
          if (res?.data?.data?.email) {
            set(
              produce((state: any) => {
                state.profile = res.data.data;
              })
            );
            return successResponsePayload(res.data);
          }
          return failedResponsePayload([res.data.message]);
        } else {
          return failedResponsePayload(res.data);
        }
      } catch (error: any) {
        console.error({
          name: "ERROR CREATE PROFILE",
          message: error.message,
        });
        return failedResponsePayload(error.message);
      }
    },
    updateProfile: async (params: any) => {
      try {
        const res: any = await api.updateProfile(params);
        if (res?.ok) {
          if (res?.data?.data?.email) {
            set(
              produce((state: any) => {
                state.profile = res.data.data;
              })
            );
            return successResponsePayload(res.data);
          }
          return failedResponsePayload([res.data.message]);
        } else {
          return failedResponsePayload(res.data);
        }
      } catch (error: any) {
        console.error({
          name: "ERROR UPDATE PROFILE",
          message: error.message,
        });
        return failedResponsePayload(error.message);
      }
    },
    getProfile: async (params: any) => {
      try {
        const res: any = await api.getProfile(params);
        if (res?.ok) {
          if (res?.data?.data?.email) {
            set(
              produce((state: any) => {
                state.profile = res.data.data;
              })
            );
            return successResponsePayload(res.data);
          }
          return failedResponsePayload([res.data.message]);
        } else {
          return failedResponsePayload(res.data);
        }
      } catch (error: any) {
        console.error({
          name: "ERROR GET PROFILE",
          message: error.message,
        });
        return failedResponsePayload(error.message);
      }
    },
    setProfileImage: (params: any) => {
      set(
        produce((state: any) => {
          state.profileImage = params;
        })
      );
    },
  };
};
