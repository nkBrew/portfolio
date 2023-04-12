import { create } from 'zustand';

interface MenuState {
  show: boolean;
  toggleShow: () => void;
}

const useMenuStore = create<MenuState>((set) => ({
  show: false,
  toggleShow: () => set(({ show }) => ({ show: !show })),
}));

export default useMenuStore;
