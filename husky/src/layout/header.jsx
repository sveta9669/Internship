import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const { menuItems } = useAuth();
    return (
        <header className="w-screen h-24 bg-white shadow flex items-center justify-around px-8 text-2xl">
            {menuItems.map((item) =>
                item.children.length > 0 ? (
                    <div key={item.id} className="relative group">
                        <Link to={item.url} className="hover:text-purple-500 transition">
                            {item.name} <span>🡣</span>
                        </Link>
                        <div className="absolute left-0 top-8 hidden group-hover:flex flex-col bg-white shadow-md rounded-md text-lg min-w-[10rem]">
                            {item.children.map((child) => (
                                <Link
                                    key={child.id}
                                    to={child.url}
                                    className="px-4 py-2 hover:bg-purple-100 transition">
                                    {child.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Link key={item.id} to={item.url} className="hover:text-purple-500 transition">
                        {item.name}
                    </Link>
                )
            )}

            <Link to="/dashboard" className="w-12 h-12 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition">
                &#9998;
            </Link>
        </header>
    )
}

export default Header;