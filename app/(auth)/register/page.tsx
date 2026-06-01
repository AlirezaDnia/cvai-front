import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50/60 p-4 dir-ltr">
            <Card className="w-full max-w-md border-slate-200/80 shadow-md bg-white">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
                        Create an Account
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-500">
                        Get started with cvai and build your 2026 AI-driven
                        resume
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <RegisterForm />
                    <div className="text-center text-xs text-slate-500 mt-2">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-slate-900 hover:underline"
                        >
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
