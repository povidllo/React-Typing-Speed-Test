import { create } from "zustand";

type TypingTimerState = {
  time: number;
  isRunning: boolean;

  start: () => void;
  stop: () => void;
  reset: () => void;
  tick: () => void;
};

export const TIME = 30;

export const useTypingTimer = create<TypingTimerState>((set, get) => ({
  time: TIME,
  isRunning: false,

  start: () => set({ time: TIME, isRunning: true }),

  stop: () => set({ isRunning: false }),

  reset: () => set({ time: TIME, isRunning: false }),

  tick: () => {
    const time = get().time;

    if (time <= 1) {
      set({ time: 0, isRunning: false });
      return;
    }

    set({ time: time - 1 });
  },
}));
