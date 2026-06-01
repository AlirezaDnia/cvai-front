import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50/60 p-4 dir-ltr">
            <Card className="w-full max-w-md border-slate-200/80 shadow-md bg-white">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
                        Welcome Back
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-500">
                        Enter your credentials to access your cvai dashboard
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <LoginForm />
                    <div className="text-center text-xs text-slate-500 mt-2">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-slate-900 hover:underline"
                        >
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
