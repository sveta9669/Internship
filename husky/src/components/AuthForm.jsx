import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../services/api'


const fromTypes = {
    signin: {
        header: "Sign In",
        fields: ["email", "password"],
        fieldsName: ["Email", "Password"],
        button: "Sign In",
        bottomLink: { text: "Sign Up", to: "/signup" },
        showForgotLink: true,
    },
    signup: {
        header: "Sign Up",
        fields: ["firstName", "lastName", "email", "password", "confirmPassword"],
        fieldsName: ["First Name", "Last Name", "Email", "Password", "Confirm Password"],
        button: "Sign Up",
        bottomLink: { text: "Sign In", to: "/signin" },
        showForgotLink: true,
    },
    forgotpass: {
        header: "Forgot Password",
        fields: ["email"],
        fieldsName: ["Email"],
        button: "Send",
        bottomLink: { text: "Sign In", to: "/signin" },
        showForgotLink: false,
    },
    newpass: {
        header: "Create New Password",
        fields: ["password", "confirmPassword"],
        fieldsName: ["New Password", "Confirm Password"],
        button: "Save",
        bottomLink: { text: "Sign In", to: "/signin" },
        showForgotLink: false,
    },
}

function AuthForm({ type }) {

    const navigate = useNavigate()
    const params = useParams()
    const { login } = useAuth()
    const [formData, setFormData] = useState({});
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [confirmPassError, setConfirmPassError] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setEmailError(false);
        setPasswordError(false);
        setConfirmPassError(false);
        if (type === 'signin') {
            try {
                const res = await api.get("/users", { params: { email: formData.email } })
                console.log("sign in ", res)
                if (res.data.length > 0) {
                    if (res.data[0].password === formData.password) {
                        navigate('/profile')
                        login(res.data[0])
                    } else {
                        // alert('Wrong Password')
                        setPasswordError(true)
                    }
                } else {
                    // alert('Wrong Email')
                    setEmailError(true)
                }
                // console.log("authform ", user)
            } catch (err) {
                console.log(err)
            }
        } else if (type === 'signup') {
            try {
                const res = await api.get("/users", { params: { email: formData.email } })
                console.log("sign up ", res)

                if (res.data.length > 0) {
                    // alert('Email already used !')
                    setEmailError(true)

                } else {
                    if (formData['password'] === formData['confirmPassword']) {
                        try {
                            const { confirmPassword, ...userData } = formData;
                            await api.post("/users", { ...userData })
                            navigate("/signin")
                        } catch (err) {
                            console.log(err)
                        }
                    } else {
                        // alert('Incorrect password')
                        setConfirmPassError(true)
                    }
                }
            } catch (err) {
                console.log(err)
            }
        } else if (type === 'forgotpass') {
            try {
                const res = await api.get("/users", { params: { email: formData.email } })
                console.log("forgotpass ", res)

                if (res.data.length > 0) {
                    navigate(`/newPass/${formData.email}`)
                } else {
                    // alert('Wrong Email')
                    setEmailError(true)
                }
            } catch (err) {
                console.log(err)
            }
        } else if (type === 'newpass') {
            try {
                if (formData['password'] === formData['confirmPassword']) {
                    const user = await api.get("/users", { params: { email: params.email } })
                    await api.patch(`/users/${user.data[0].id}`, { password: formData['password'] })
                    navigate("/signin")
                } else {
                    setConfirmPassError(true)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    const config = fromTypes[type]

    return (
        <form onSubmit={handleSubmit}
            className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-md space-y-6">
            <h2 className='text-2xl font-semibold text-center text-black'>{config.header}</h2>

            {config.fields.map((field, index) => (
                <div key={field} className="flex flex-col">
                    <label key={field} htmlFor={field} className="text-sm font-medium text-gray-400 mb-1 focus-within:text-purple-500">
                        {config.fieldsName[index]} <br />
                        <input
                            name={field}
                            type={field.toLowerCase().includes("password")
                                ? "password"
                                : field.toLowerCase().includes("email")
                                    ? "email"
                                    : "text"}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 focus:ring-1 focus:ring-purple-500 rounded-md px-3 py-2 text-sm outline-none"
                        />
                        {emailError && field === "email" && (
                            <sub className="text-red-500 text-xs mt-1 block">Email is not found or already used!</sub>
                        )}

                        {passwordError && field === "password" && (
                            <sub className="text-red-500 text-xs mt-1 block">Incorrect password!</sub>
                        )}

                        {confirmPassError && field === "confirmPassword" && (
                            <sub className="text-red-500 text-xs mt-1 block">Passwords do not match!</sub>
                        )}
                    </label>
                </div>
            ))}

            {config.showForgotLink && (
                <div className="text-right text-sm">
                    <Link to="/forgotPass" className="text-purple-500 hover:underline">Forgot Password?</Link>
                </div>
            )}

            <button type="submit" className="w-full bg-purple-500 text-white rounded-lg py-2 font-medium hover:bg-purple-600 transition">{config.button}</button>

            <div className="text-center">
                <Link to={config.bottomLink.to} className="text-black font-semibold text-sm hover:underline">{config.bottomLink.text}</Link>
            </div>
        </form>
    )
}

export default AuthForm;