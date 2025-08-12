'use client';


import { login } from "@/lib/api/clientApi";
import css from "./SignInPage.module.css";
import { RegisterRequest } from "@/types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApiError } from "@/app/api/api";
import { useSessionStore } from "@/lib/store/authStore";

export default function ClientSignInPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const { setUser } = useSessionStore();

    const handleSubmit = async (formData: FormData) => {
            try {
                const formValues = Object.fromEntries(formData) as RegisterRequest;
                const res = await login(formValues);
                if (res) {
                    setUser(res);
                    router.push('/profile');
                } else {
                    setError('Invalid email or password');
                }
            } catch (error) {
                setError(
                    (error as ApiError).response?.data?.error ??
                    (error as ApiError).message ??
                    'Oops... some error'
                )
            }
        };

    return (
        <main className={css.mainContent}>
            <form className={css.form} action={ handleSubmit}>
                <h1 className={css.formTitle}>Sign in</h1>

                <div className={css.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" className={css.input} required />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" className={css.input} required />
                </div>

                <div className={css.actions}>
                    <button type="submit" className={css.submitButton}>
                        Log in
                    </button>
                </div>

                {error && <p className={css.error}>{error}</p> }
            </form>
        </main>

    );    
}