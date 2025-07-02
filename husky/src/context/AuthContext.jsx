import { useContext, createContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {

    const [user, setUser] = useState({})
    const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Home",
      url: "/profile",
      children: [],
    },
    {
      id: 2,
      name: "About Us",
      url: "/about",
      children: [],
    },
    {
      id: 3,
      name: "Blog",
      url: "/blog",
      children: [
        { id: 4, name: "Client Success", url: "/blog/client" },
        { id: 5, name: "5 greatest books", url: "/blog/books" },
      ],
    },
    {
      id: 6,
      name: "Partners",
      url: "/partners",
      children: [
        { id: 7, name: "Affiliate", url: "/partners/affiliate" },
        { id: 8, name: "Sponsors", url: "/partners/sponsors" },
      ],
    },
    {
      id: 9,
      name: "Contact Us",
      url: "/chat",
      children: [],
    },
  ]);

    useEffect(() => {
        const loadUser = async () => {
            const userId = localStorage.getItem("userId");
            if (userId) {
                try {
                    const res = await api.get("/users", { params: { id: userId } });
                    if (res.data?.length > 0) {
                        setUser(res.data[0]);
                    }
                } catch (err) {
                    console.error("Failed to load user", err);
                    localStorage.removeItem("userId");
                }
            }
        };

        loadUser();
    }, []);

    const login = (userData) => {
        localStorage.setItem("userId", userData.id);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("userId");
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, menuItems, setMenuItems }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;