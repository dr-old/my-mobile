type AuthStoreType = {
  login: (params: any) => void;
  register: (params: any) => void;
  clearSession: (params?: any) => void;
  isLoggedIn: boolean;
};

type ProfileStoreType = {
  updateProfile: (params: any) => void;
  createProfile: (params: any) => void;
  getProfile: (params?: any) => void;
  setProfileImage: (params: any) => void;
  profile: object | any;
  profileImage: object | any;
};

type ResponsePayloadType = {
  ok?: boolean;
  data?: any;
  error?: any;
};
