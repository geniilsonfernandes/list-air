import { create } from 'zustand';

const mockList = [
  'Milk',
  'Eggs',
  'Bread',
  'Potato',
  'Onion',
  'Carrot',
  'Butter',
  'Chicke',
  'Cheese',
  'Mushroom',
];

interface StoreState {
  search: string;
  searchList: string[];
  itemsSelected: string[];
  setSearch: (search: string) => void;
  setSearchList: (searchList: string[]) => void;
  setItemsSelected: (items: string[]) => void;
  handleSearch: (value: string) => void;
  handleSelect: (name: string) => void;
  checkIfSelected: (name: string) => boolean;
}

export const useSearchStore = create<StoreState>((set, get) => ({
  search: '',
  searchList: mockList,
  itemsSelected: [],
  setSearch: (search) => set({ search }),
  setSearchList: (searchList) => set({ searchList }),
  setItemsSelected: (itemsSelected) => set({ itemsSelected }),
  handleSearch: (value) => {
    set({ search: value });
    if (value === '') {
      set({ searchList: mockList });
    } else {
      set({
        searchList: mockList.filter((item) => item.toLowerCase().includes(value.toLowerCase())),
      });
    }
  },
  handleSelect: (name) => {
    const { itemsSelected } = get();
    if (itemsSelected.includes(name)) {
      set({ itemsSelected: itemsSelected.filter((item) => item !== name) });
    } else {
      set({ itemsSelected: [...itemsSelected, name] });
    }
  },
  checkIfSelected: (name) => get().itemsSelected.includes(name),
}));
