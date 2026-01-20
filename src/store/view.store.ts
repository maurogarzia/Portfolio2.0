import { create } from "zustand";

interface IViewStore {
    view: string,
    setView: (option: string) => void
}

export const viewStore = create<IViewStore>((set) => ({
    view: "emptySelected",
    setView: (option) => set({view: option})
}))