import NavbarProduct from "@/components/navbar";
import type { Metadata } from "next";
import { CookiesProvider, getCookies } from "next-client-cookies/server";

export const metadata: Metadata = {
  title: "Official Website SERLOK AJA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { get, set } = getCookies();
  const token = get('Authorization');
  const isLogin = token ? true : false;
  return (
    <>
    <NavbarProduct isLogin={isLogin} />
      <CookiesProvider>
        <div className="bg-white">
          {children}
        </div>
      </CookiesProvider>
    </>
  );
}
