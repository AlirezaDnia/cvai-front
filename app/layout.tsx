import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: "cvai | AI-Driven Resume Builder",
    description:
        "An architectural approach to business revenue and resume growth.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full bg-slate-50/30 font-sans antialiased flex flex-col">
                {/* Global Navigation Header */}
                <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dir-ltr">
                    <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
                        <Link
                            href="/"
                            className="text-base font-bold tracking-tight text-slate-900 flex items-center gap-1"
                        >
                            cvai
                            <span className="text-slate-400 font-normal text-xs">
                                .
                            </span>
                        </Link>

                        <nav className="flex items-center gap-3">
                            <Button
                                asChild
                                variant="ghost"
                                className="h-8 text-xs font-medium text-slate-600 hover:text-slate-900"
                            >
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button
                                asChild
                                className="h-8 rounded px-3 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white"
                            >
                                <Link href="/register">Sign Up</Link>
                            </Button>
                        </nav>
                    </div>
                </header>

                {/* Viewport View Wrapper */}
                <main className="flex-1 flex flex-col">{children}</main>

                <Toaster position="top-right" richColors />
            </body>
        </html>
    );
}
