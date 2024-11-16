import React from "react";
import "tailwindcss/tailwind.css";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-16">
            {children}
        </main>
    );
}