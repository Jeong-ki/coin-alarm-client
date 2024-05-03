import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface IGlobalState {
  test: string;
  setTest: (state: string) => void;
}

const store: StateCreator<IGlobalState> = (set, get) => ({
  test: "",
  setTest: (state) => set({ test: state }),
});

const useGlobalState = create<IGlobalState>()(
  devtools(store, { enabled: process.env.NODE_ENV === "development" })
);

export default useGlobalState;
