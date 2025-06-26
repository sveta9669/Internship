import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import ForgotPassword from '../pages/Auth/ForgotPassword'
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import NewPassword from '../pages/Auth/NewPassword'
import UserProfile from '../pages/Profile/UserProfile'
import Dashboard from '../pages/Dashboard'
import ChatPage from '../pages/ChatPage'

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signIn" element={<SignIn />} ></Route>
                <Route path="/signUp" element={<SignUp />} ></Route>
                <Route path="/forgotPass" element={<ForgotPassword />} ></Route>
                <Route path="/newPass/:email" element={<NewPassword />} ></Route>
                <Route path="/profile" element={
                    <ProtectedRoute> <UserProfile /> </ProtectedRoute>
                } ></Route>
                <Route path="/dashboard" element={
                    <ProtectedRoute> <Dashboard /> </ProtectedRoute>
                } ></Route>
                <Route path="/chat" element={
                    <ProtectedRoute> <ChatPage /> </ProtectedRoute>
                } ></Route>
                <Route path="*" element={<SignIn />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;