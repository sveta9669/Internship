import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/profile">Home</Link>
            <Link to="/profile">About Us</Link>
            <Link to="/forgotPass">Blog</Link>
            <Link to="/chat">Partner</Link>
            <Link to="/chat">Contact Us</Link>
            <Link to="/dashboard">✏️</Link>
        </div>
    )
}

export default Header;