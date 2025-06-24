import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../layouts/AuthForm";

function ForgotPassword() {
    return (
        <AuthLayout>
            <AuthForm type="forgotpass"/>
        </AuthLayout>
    )
}

export default ForgotPassword;