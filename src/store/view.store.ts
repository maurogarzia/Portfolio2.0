import { create } from "zustand";

interface IViewStore {
    view: string,
    setView: (option: string) => void
}

export const viewStore = create<IViewStore>((set) => ({
    view: "home",
    setView: (option) => set({view: option})
}))