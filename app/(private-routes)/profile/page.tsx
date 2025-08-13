
import { Metadata } from "next";
import ClientProfilePage from "./ClientProfilePage";


export const metadata: Metadata = {
  title: "Your Profile – Notes App",
  description: "View and manage your personal profile, settings, and saved notes.",
  openGraph: {
    title: "Your Profile – Notes App",
    description: "Access your account details, update settings, and explore your saved notes.",
    url: "https://08-zustand-mu-seven.vercel.app/profile",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Illustration of personal notes and profile settings"
      },
    ]
  }
};

export default function ProfilePage() {
  //const { user} = useSessionStore();

    return (
        <ClientProfilePage/>
    )
}
