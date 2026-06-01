import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 dir-ltr">
            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200/60">
                    <Sparkles className="h-3.5 w-3.5 text-slate-900 fill-slate-900" />{" "}
                    Next-Gen AI Resume Engine
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
                    Build a resume that outperforms the algorithm.
                </h1>

                <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
                    Optimize your professional profile for specific job roles
                    instantly using tailored 2026 AI technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
                    <Button
                        asChild
                        className="h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6"
                    >
                        <Link href="/register">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="h-11 border-slate-200 text-slate-700 hover:bg-slate-50 px-6"
                    >
                        <Link href="/login">Sign In</Link>
                    </Button>
                </div>

                {/* Feature Highlights - Mobile Stack / Desktop Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 w-full max-w-2xl text-left">
                    {[
                        "ATS Optimization",
                        "Next.js 16 Preview",
                        "Instant Structuring",
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-100 bg-slate-50/50"
                        >
                            <CheckCircle2 className="h-4 w-4 text-slate-900 shrink-0" />
                            <span className="text-xs font-medium text-slate-700">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
