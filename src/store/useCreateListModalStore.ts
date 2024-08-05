import { create } from 'zustand';

interface StoreState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreateListModalStore = create<StoreState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
