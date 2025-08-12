import { create } from "zustand";
import { User } from "@/types/user";
import { persist } from "zustand/middleware";

type SessionStore = {
    user: User;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    clearIsAuthenticated: () => void;
};

const initialData: User = {
    id:"",
    email:"",
    userName:"",
    photoUrl: "",
    createdAt: new Date(),
    updatedAt: new Date(),

};

export const useSessionStore = create<SessionStore>()(
    persist(
        (set) => ({
            user: initialData,
            isAuthenticated: false,
            setUser: (user) => set(() => ({
                user: user,
                isAuthenticated:true,
             })),
            clearIsAuthenticated: () => set(() => ({
                isAuthenticated: false,
                user: initialData,
            })),
        }),
        {
            name: "uset-session",
            partialize: (state) => ({
                isAuthenticated: state.isAuthenticated,
                user: state.user,
            }),
        }
    )
);
