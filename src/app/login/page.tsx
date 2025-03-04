import { Demo } from "@/components/demo/Demo";
import { LoginForm } from "@/components/loginForm/LoginForm";

export default function Login() {
    return (
        <div className="sm:grid min-h-screen sm:grid-cols-2 antialiased">
            <LoginForm />
            <Demo />
        </div>
    )
}