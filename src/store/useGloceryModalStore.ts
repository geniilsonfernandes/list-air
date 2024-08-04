import { create } from 'zustand';

interface GlocerItem {
  name: string;
  value: string;
  amount: string;
  unit: string;
}

interface StoreState {
  isOpen: boolean;
  gloceryItem?: GlocerItem;
  onOpen: (gloceryItem: GlocerItem) => void;
  onClose: () => void;
  setGloceryItem: (gloceryItem: GlocerItem) => void;
  getGloceryItem: () => GlocerItem | undefined;
}

const useGloceryModalStore = create<StoreState>((set, get) => ({
  isOpen: false,
  onOpen: (gloceryItem) => set({ isOpen: true, gloceryItem }),
  onClose: () => set({ isOpen: false, gloceryItem: undefined }),
  gloceryItem: {
    name: '',
    value: '',
    amount: '',
    unit: '',
  },
  setGloceryItem: (gloceryItem) => set({ gloceryItem }),
  getGloceryItem: () => get().gloceryItem,
}));

export default useGloceryModalStore;
