import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const { menuItems } = useAuth();
    return (
        <header className="w-screen h-24 bg-white shadow flex items-center justify-around px-8 text-2xl">
            {menuItems.map((item) =>
                item.children.length > 0 ? (
                    <div key={item.id} className="relative group">
                        <NavLink to={item.url} className={({ isActive }) =>
                            `transition hover:text-purple-500 ${
                                isActive ? "text-purple-700 font-semibold" : ""
                            }`
                        }>
                            {item.name} <span>🡣</span>
                        </NavLink>
                        <div className="absolute left-0 top-8 hidden group-hover:flex flex-col bg-white shadow-md rounded-md text-lg min-w-[10rem]">
                            {item.children.map((child) => (
                                <NavLink
                                    key={child.id}
                                    to={child.url}
                                    className="px-4 py-2 hover:bg-purple-100 transition">
                                    {child.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ) : (
                    <NavLink key={item.id} to={item.url}
                        className={({ isActive }) =>
                            `transition hover:text-purple-500 ${
                                isActive ? "text-purple-700 font-semibold" : ""
                            }`
                        }>
                        {item.name}
                    </NavLink>
                )
            )}

            <NavLink to="/dashboard" className="w-12 h-12 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition">
                &#9998;
            </NavLink>
        </header>
    )
}

export default Header;