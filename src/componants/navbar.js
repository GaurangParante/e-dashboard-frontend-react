import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div>
            <img className="logo" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" />
            {
                auth ?
                    <ul className="nav-ul">
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update">Update Products</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link onClick={logout} to="/login">Logout {JSON.parse(auth).name}</Link></li>
                    </ul> :
                    <ul className="nav-ul nav-right">
                        <li><Link to="/signup">Sign-up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }

        </div>
    )
}

export default Navbar