import { create } from "zustand";

type pomodoroStore = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
};

type pomodoroActions = {
  incrementPomodoro: (by: number) => void;
  incrementShortBreak: (by: number) => void;
  incrementLongBreak: (by: number) => void;
  decrementPomodoro: (by: number) => void;
  decrementShortBreak: (by: number) => void;
  decrementLongBreak: (by: number) => void;
};

export const usePomodoro = create<pomodoroStore & pomodoroActions>((set) => ({
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  incrementPomodoro: (by = 5) =>
    set((state) => ({ pomodoro: state.pomodoro + by })),
  decrementPomodoro: (by = 5) =>
    set((state) => ({ pomodoro: state.pomodoro - by })),
  incrementShortBreak: (by = 5) =>
    set((state) => ({ shortBreak: state.shortBreak + by })),
  decrementShortBreak: (by = 5) =>
    set((state) => ({ shortBreak: state.shortBreak - by })),
  incrementLongBreak: (by = 5) =>
    set((state) => ({ longBreak: state.longBreak + by })),
  decrementLongBreak: (by = 5) =>
    set((state) => ({ longBreak: state.longBreak - by })),
}));

export const colors = {
  pink: "284 91% 74%",
  cyan: "183 91% 70%",
  red: "3 90% 70%",
};
