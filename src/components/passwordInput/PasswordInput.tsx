import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import { ControllerRenderProps } from "react-hook-form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface PasswordProps {
    field: ControllerRenderProps<{
        email: string;
        password: string;
    }, "password">
}

export function PasswordInput({ field }: PasswordProps) {
    const [showPassword, setshowPassword] = useState(false)

    function handleShowPassword() {
        setshowPassword(!showPassword)
    }

    return (
        <div className="relative">
            <Input
                placeholder="Enter your password"
                {...field}
                type={showPassword ? 'text' : 'password'}
                minLength={5}
                maxLength={25}
            />
            <Button
                onClick={handleShowPassword}
                type="button"
                className="absolute right-0 top-0 bg-transparent hover:bg-transparent shadow-none"
            >
                {showPassword ? (
                    <EyeIcon className="text-black dark:text-white" />
                ) : (
                    <EyeOffIcon className="text-black dark:text-white" />
                )}
            </Button>
        </div>
    )
}