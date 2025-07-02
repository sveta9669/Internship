import AuthLayout from "../../layout/AuthLayout";
import AuthForm from "../../components/AuthForm";

function SignUp() {
    return (
        <AuthLayout>
            <AuthForm type="signup"/>
        </AuthLayout>
    )
}

export default SignUp;