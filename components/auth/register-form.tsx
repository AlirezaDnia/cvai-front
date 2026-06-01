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
import { registerSchema, RegisterInput } from "@/types/auth";
import { apiClient } from "@/lib/api-client";

export function RegisterForm() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const form = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: RegisterInput) => {
        setLoading(true);
        try {
            await apiClient("/api/register", {
                method: "POST",
                body: JSON.stringify(values),
            });

            toast.success("Account created successfully. Please login.");
            router.push("/login");
        } catch (err: any) {
            toast.error(err.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem className="space-y-1.5">
                                <FormLabel className="text-xs font-semibold text-slate-700">
                                    First Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John"
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
                        name="last_name"
                        render={({ field }) => (
                            <FormItem className="space-y-1.5">
                                <FormLabel className="text-xs font-semibold text-slate-700">
                                    Last Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Doe"
                                        {...field}
                                        className="h-10 border-slate-200 focus-visible:ring-slate-900 text-sm"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs font-medium text-destructive" />
                            </FormItem>
                        )}
                    />
                </div>

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
                        "Get Started"
                    )}
                </Button>
            </form>
        </Form>
    );
}
