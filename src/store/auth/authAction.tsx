import api from "@/services/api";
import { failedResponsePayload, successResponsePayload } from "@/utils/helpers";
import { deleteCookie, setCookie } from "cookies-next";
import { produce } from "immer";

export const AuthAction = (set: any, get: any) => {
  return {
    login: async (params: any) => {
      try {
        const res = await api.login(params);
        if (res?.ok) {
          if (res?.data?.access_token) {
            set(
              produce((state: any) => {
                state.token = res.data.access_token;
                state.isLoggedIn = true;
              })
            );
            setCookie("accessToken", res.data.access_token);
            return successResponsePayload(res.data);
          }
          deleteCookie("accessToken");
          return failedResponsePayload([res.data.message]);
        } else {
          deleteCookie("accessToken");
          return failedResponsePayload(res.data);
        }
      } catch (error: any) {
        console.error({
          name: "ERROR LOGIN",
          message: error.message,
        });
        deleteCookie("accessToken");
        return failedResponsePayload(error.message);
      }
      //    finally {
      //     useAuthStore.getState().setLoading(false);
      //   }
    },
    register: async (params: any) => {
      try {
        const res = await api.register(params);
        // set(
        //   produce((state: any) => {
        //     state.token = "danni";
        //     state.isLoggedIn = true;
        //   })
        // );
        if (res?.ok) {
          return successResponsePayload(res.data);
        } else {
          return failedResponsePayload(res.data);
        }
      } catch (error: any) {
        console.error({
          name: "ERROR LOGIN",
          message: error.message,
        });
        return failedResponsePayload(error.message);
      }
      //    finally {
      //     useAuthStore.getState().setLoading(false);
      //   }
    },
  };
};
