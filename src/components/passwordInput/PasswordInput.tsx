import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface PasswordProps<T extends FieldValues, K extends Path<T>> {
    field: ControllerRenderProps<T, K>
}

export function PasswordInput<T extends FieldValues, K extends Path<T>>({ field }: PasswordProps<T, K>) {
    const [showPassword, setShowPassword] = useState(false)

    function handleShowPassword() {
        setShowPassword(!showPassword)
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
