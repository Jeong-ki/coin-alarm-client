import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  token: null | string;
  setToken: (state: string) => void;
}

const store: StateCreator<AuthState> = (set, get) => ({
  token: null,
  setToken: token => set({ token }),
});

const useAuthStore = create<AuthState>()(
  devtools(store, { enabled: process.env.NODE_ENV === 'development' })
);

export default useAuthStore;
