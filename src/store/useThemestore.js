import { create } from 'zustand';

const useThemeStore = create((set) => ({
  darkMode: false, // Initial state
  setDarkMode: (data) => set({ darkMode: data }), // Function to set dark mode
  sideBarOpen:false,
  setSideBarOpen:(data)=>set({sideBarOpen:data}),
}));

export default useThemeStore;
