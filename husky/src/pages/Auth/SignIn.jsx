import AuthLayout from "../../layout/AuthLayout";
import AuthForm from "../../components/AuthForm";

function SignIn() {
    
    return (
        <AuthLayout>
            <AuthForm type="signin"/>
        </AuthLayout>
    )
}

export default SignIn;