"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { loginSchema, LoginInput } from "@/types/auth";
import { apiClient } from "@/lib/api-client";

export function LoginForm() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = async (values: LoginInput) => {
        setLoading(true);
        try {
            const data = await apiClient<{ token: string }>("/api/login", {
                method: "POST",
                body: JSON.stringify(values),
            });

            localStorage.setItem("token", data.token);
            toast.success("Welcome back! Redirecting...");
            router.push("/dashboard");
        } catch (err: any) {
            toast.error(err.message || "Authentication failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-1.5">
                            <FormLabel className="text-xs font-semibold text-slate-700">
                                Email Address
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    {...field}
                                    className="h-10 border-slate-200 focus-visible:ring-slate-900 text-sm"
                                />
                            </FormControl>
                            <FormMessage className="text-xs font-medium text-destructive" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="space-y-1.5">
                            <FormLabel className="text-xs font-semibold text-slate-700">
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    {...field}
                                    className="h-10 border-slate-200 focus-visible:ring-slate-900 text-sm"
                                />
                            </FormControl>
                            <FormMessage className="text-xs font-medium text-destructive" />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white h-10 font-medium mt-2"
                    disabled={loading}
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        "Sign In"
                    )}
                </Button>
            </form>
        </Form>
    );
}
