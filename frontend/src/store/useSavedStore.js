import { create } from "zustand";

const useSavedStore = create(
  (set) => ({
    savedIds: [],

    setSavedIds: (ids) =>
      set({
        savedIds: ids,
      }),

    addSavedCollege: (id) =>
      set((state) => ({
        savedIds: [
          ...state.savedIds,
          id,
        ],
      })),

    removeSavedCollege: (id) =>
      set((state) => ({
        savedIds:
          state.savedIds.filter(
            (item) => item !== id
          ),
      })),
  })
);

export default useSavedStore;