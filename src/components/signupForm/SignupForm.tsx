'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { useRouter } from 'next/navigation'
import { Logo } from '../logo/logo'
import { PasswordInput } from '../passwordInput/PasswordInput'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const signupSchema = zod.object({
    firstName: zod
        .string()
        .nonempty("First name is required")
        .min(3, "The name must have at least 3 characters"),
    lastName: zod
        .string()
        .nonempty("First name is required")
        .min(3, "The name must have at least 3 characters"),
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

export type typesignupSchema = zod.infer<typeof signupSchema>

export function SignupForm() {
    const form = useForm<typesignupSchema>({
        resolver: zodResolver(signupSchema)
    })

    const router = useRouter()

    function handleSignup(data: typesignupSchema) {
        router.push('/dashboard')
    }


    return (
        <div className='flex items-center justify-center h-[100vh] sm:col-span-1 px-3 md:px-0'>
            <div className='space-y-8'>
                <Logo />
                <div className='space-y-6'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-semibold text-4xl tracking-[-2px]'>Sign up</h1>
                        <p className='text-base text-gray-600'>Please enter your details.</p>
                    </div>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSignup)} noValidate className="space-y-6 flex flex-col w-full">
                                <div className='flex gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-gray-600'>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: John" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-gray-600'>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
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
                                <Button type="submit">Sign up</Button>
                            </form>
                        </Form>
                    </div>
                    <div className='flex justify-center gap-1 text-sm'>
                        <span className='text-gray-600'>Do you have an account?</span>
                        <Link href={"/login"}>
                            <span className='text-blue-500 font-semibold'>Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}