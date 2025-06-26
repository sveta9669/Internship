import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-screen h-24 bg-white shadow flex items-center justify-around px-8 text-2xl">
            <Link to="/profile" className="hover:text-purple-500 transition">Home</Link>
            <Link to="/profile" className="hover:text-purple-500 transition">About Us</Link>
              <div className="relative group">
                <Link to="/blog" className="hover:text-purple-500 transition">Blog <span>🡣</span></Link>
                <div className="absolute left-3 top-7 mt-1 hidden group-hover:flex flex-col bg-white shadow-md rounded-md text-lg min-w-[10rem]">
                    <Link to="/blog" className="px-4 py-2 hover:bg-purple-100 transition">Client Success</Link>
                    <Link to="/blog" className="px-4 py-2 hover:bg-purple-100 transition">5 greatest books</Link>
                </div>
            </div>
            <div className="relative group">
                <Link to="/partners" className="hover:text-purple-500 transition">Partners <span>🡣</span></Link>
                <div className="absolute left-3 top-7 mt-1 hidden group-hover:flex flex-col bg-white shadow-md rounded-md text-lg min-w-[10rem]">
                    <Link to="/partners" className="px-4 py-2 hover:bg-purple-100 transition">Affiliate</Link>
                    <Link to="/partners" className="px-4 py-2 hover:bg-purple-100 transition">Sponsors</Link>
                </div>
            </div>
            <Link to="/contact" className="hover:text-purple-500 transition">Contact Us</Link>

            <Link to="/dashboard" className="w-12 h-12 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition">
                &#9998;
            </Link>
        </header>
    )
}

export default Header;