"use client";

import Link from "next/link";
import css from "./ProfilePage.module.css";
import Image from "next/image";
import { useSessionStore } from "@/lib/store/authStore";

export default function ClientProfilePage() {
  const { user} = useSessionStore();

    return (
        <main className={css.mainContent}>
  <div className={css.profileCard}>
      <div className={css.header}>
	     <h1 className={css.formTitle}>Profile Page</h1>
	     <Link href="/" className={css.editProfileButton}>
	       Edit Profile
	     </Link>
	   </div>
     <div className={css.avatarWrapper}>
      <Image
        src="https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"
        alt="User Avatar"
        width={120}
        height={120}
        className={css.avatar}
      />
    </div>
    <div className={css.profileInfo}>
      <p>
        Username: {user?.userName ? user.userName : "No username"};
      </p>
      <p>
              Email: { user?.email}
      </p>
    </div>
  </div>
</main>
    )
}