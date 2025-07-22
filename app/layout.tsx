
import { getTheme, getThemeCookies } from "@/utils/ThemeContext";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";

export const metadata: Metadata = {
    title: "serverStatePanel",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = await getThemeCookies()
    return (
        <html lang="en" data-theme={theme}>

            <body> 
                {children}
            </body>
        </html>
    );
}