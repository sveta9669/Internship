import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../layouts/AuthForm";

function NewPassword() {
    return (
        <AuthLayout>
            <AuthForm type="newpass"/>
        </AuthLayout>
    )
}

export default NewPassword;