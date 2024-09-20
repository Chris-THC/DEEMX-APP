import { create } from "zustand";

interface SearchStore {
  searchText: string;
  setSearchText: (something: string) => void;
}

export const storeSearch = create<SearchStore>((set) => ({
  searchText: "",
  setSearchText: (something: string): void =>
    set(() => ({
      searchText: something,
    })),
}));
