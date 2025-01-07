import { writable } from "svelte/store";
import { auth } from "$lib/firebase/firebase.client";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from "firebase/auth";

export const authStore = writable({
    isLoading: true,
    currentUser: null
})

export const authHandlers = {
    signup: async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    logout: async () => {
        await signOut(auth)
    },
    reset_password: async (email) => {
        await sendPasswordResetEmail(auth, email)
    },
    updateEmail: async (email) => {
        await updateEmail(auth, email)
    },
    updatePassword: async (password) => {
        await updatePassword(auth.currentUser, password)
    },
    login: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    }
}

//async function - function that returns a promise
//await - keyword usable in async functions that wait for a promise to resolve
//promise - object that shows pending state, 
//can either move to "fulfilled" or "rejected" state