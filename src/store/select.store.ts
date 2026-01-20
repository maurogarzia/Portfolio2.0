import { create } from "zustand";

export interface ICardSelected{
    span: string
    color: string
    name: string
}

interface ISelectedStore{
    cardsOpen : ICardSelected[]

    createCard: (newCard: ICardSelected) => void
    deleteCard: (name: string) => void
}

export const selectStore = create<ISelectedStore>((set) => ({
    cardsOpen: [],

    createCard: (newCard) => set((state) => ({
        cardsOpen: [...state.cardsOpen, newCard]
    })),

    deleteCard: (name) => set((state) => ({
        cardsOpen: state.cardsOpen.filter(card => card.name !== name)
    }))
}))