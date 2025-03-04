import { Demo } from "@/components/demo/Demo";
import { SignupForm } from "@/components/signupForm/SignupForm";

export default function Signup() {
    return (
        <div className="sm:grid min-h-screen sm:grid-cols-2 antialiased">
            <SignupForm />
            <Demo />
        </div>
    )
}