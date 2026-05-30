import { create } from "zustand";

const useCollegeStore = create((set) => ({
  search: "",
  location: "",
  type: "",
  sortBy: "",
  page: 1,

  compareIds: [],

  setSearch: (search) =>
    set({ search, page: 1 }),

  setLocation: (location) =>
    set({ location, page: 1 }),

  setType: (type) =>
    set({ type, page: 1 }),

  setSortBy: (sortBy) =>
    set({ sortBy, page: 1 }),

  setPage: (page) =>
    set({ page }),

  toggleCompare: (id) =>
    set((state) => ({
      compareIds: state.compareIds.includes(id)
        ? state.compareIds.filter(
            (item) => item !== id
          )
        : [...state.compareIds, id],
    })),
}));

export default useCollegeStore;