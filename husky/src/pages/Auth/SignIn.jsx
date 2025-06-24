import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../layouts/AuthForm";


function SignIn() {
    
    return (
        <AuthLayout>
            <AuthForm type="signin"/>
        </AuthLayout>
    )
}

export default SignIn;