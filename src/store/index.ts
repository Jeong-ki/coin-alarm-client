import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface GlobalState {
  test: string;
  setTest: (state: string) => void;
}

const store: StateCreator<GlobalState> = (set, get) => ({
  test: "",
  setTest: (state) => set({ test: state }),
});

const useGlobalStore = create<GlobalState>()(
  devtools(store, { enabled: process.env.NODE_ENV === "development" })
);

export default useGlobalStore;
