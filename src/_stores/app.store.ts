import Utils_authentication from "src/utils/auth.util";
import { create } from "zustand";

export interface IAppStores {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;

  pageIsLoading: boolean;
  setPageIsLoading: (value: boolean) => void;
}

const useAppStores = create<IAppStores>()((set) => ({
  isAuthenticated: Boolean(Utils_authentication.getAccessTokenFromLS()),
  setIsAuthenticated: (value: boolean) => {
    set((state) => ({ ...state, isAuthenticated: value }));
  },

  pageIsLoading: false,
  setPageIsLoading: (value: boolean) => {
    set((state) => ({ ...state, pageIsLoading: value }));
  },
}));

export default useAppStores;
