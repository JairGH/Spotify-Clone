import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPLaying: false,
  currentMusic: { playlist: null, song: null, song: [] },
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
