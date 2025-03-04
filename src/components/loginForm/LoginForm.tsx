'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Logo } from '../logo/logo'
import { PasswordInput } from '../passwordInput/PasswordInput'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const loginSchema = zod.object({
    email: zod
        .string()
        .nonempty("E-mail is required")
        .email("Please enter a valid e-mail"),
    password: zod
        .string()
        .nonempty("Password is required")
        .min(5, "Password must have at least 5 characters")
        .max(25, "Password must have at most 15 characters"),
})

export type typeloginSchema = zod.infer<typeof loginSchema>

export function LoginForm() {
    const form = useForm<typeloginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const router = useRouter()

    function handleLogin(data: typeloginSchema) {
        router.push('/dashboard')
    }

    return (
        <div className='flex items-center justify-center h-[100vh] sm:col-span-1 px-3 md:px-0'>
            <div className='space-y-8'>
                <Logo />
                <div className='space-y-6'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-semibold text-4xl tracking-[-2px]'>Log in</h1>
                        <p className='text-base text-gray-600'>Welcome back! Please enter your details.</p>
                    </div>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleLogin)} noValidate className="space-y-6 flex flex-col w-full">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-gray-600'>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-gray-600'>Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput field={field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                    <div className='flex justify-center gap-1 text-sm'>
                        <span className='text-gray-600'>Don’t have an account?</span>
                        <Link href={"/signup"}>
                            <span className='text-blue-500 font-semibold'>Sign up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}