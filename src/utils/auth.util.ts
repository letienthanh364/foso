import { UserModel } from "src/types/user/user.type";

const LocalStorageEventTarget = new EventTarget();

const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem("access_token", access_token);
};

const getAccessTokenFromLS = () => {
  return localStorage.getItem("access_token") || "";
};

const setAccessTokenToSessionStorage = (access_token: string) => {
  sessionStorage.setItem("access_token", access_token);
};

const getAccessTokenFromSessionStorage = () => {
  return sessionStorage.getItem("access_token") || "";
};

const setProfileToLS = (profile: UserModel) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};

const getProfileFromLS = () => {
  const result = localStorage.getItem("profile");
  return result ? JSON.parse(result) : null;
};

const clearLS = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("profile");

  const clearLSEvent = new Event("clearLS");
  LocalStorageEventTarget.dispatchEvent(clearLSEvent);
};

const Utils_authentication = {
  setAccessTokenToLS,
  getAccessTokenFromLS,
  setAccessTokenToSessionStorage,
  getAccessTokenFromSessionStorage,
  setProfileToLS,
  getProfileFromLS,
  clearLS,
};

export default Utils_authentication;
