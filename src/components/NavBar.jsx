import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }
    
    return(
       <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/productdata">Updated Product</Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-danger" type="submit" onClick={handleLogout}>Logout</button>
            </form>
            </div>
        </div>
        </nav>
       </>
    )
}

export default NavBar;