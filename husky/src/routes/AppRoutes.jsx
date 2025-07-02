import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import ForgotPassword from '../pages/Auth/ForgotPassword'
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import NewPassword from '../pages/Auth/NewPassword'
import UserProfile from '../pages/Profile/UserProfile'
import Dashboard from '../pages/Profile/Dashboard'
import ChatPage from '../pages/Profile/ChatPage'

const ProtectedRoute = () => {
  const userID = localStorage.getItem("userId");
  return userID ? <Outlet /> : <Navigate to="/signin" replace />;
};

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signIn" element={<SignIn />} ></Route>
                <Route path="/signUp" element={<SignUp />} ></Route>
                <Route path="/forgotPass" element={<ForgotPassword />} ></Route>
                <Route path="/newPass/:email" element={<NewPassword />} ></Route>
                <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
                <Route path="*" element={<SignIn />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;