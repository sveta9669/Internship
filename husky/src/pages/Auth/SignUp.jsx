import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../layouts/AuthForm";

function SignUp() {
    return (
        <AuthLayout>
            <AuthForm type="signup"/>
        </AuthLayout>
    )
}

export default SignUp;