import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2093ee"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/India">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/India">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/US">US</Link></li>
                                    <li><Link className="dropdown-item" to="/UK">UK</Link></li>
                                    <li><Link className="dropdown-item" to="/France">France</Link></li>
                                    <li><Link className="dropdown-item" to="/India">India</Link></li>
                                    <li><Link className="dropdown-item" to="/Australia">Australia</Link></li>
                                    <li><Link className="dropdown-item" to="/Canada">Canada</Link></li>
                                    <li><Link className="dropdown-item" to="/Brazil">Brazil</Link></li>
                                    <li><Link className="dropdown-item" to="/Japan">Japan</Link></li>
                                    <li><Link className="dropdown-item" to="/SA">SA</Link></li>
                                </ul>
                            </li>
                          
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}
