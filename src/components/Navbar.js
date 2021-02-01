import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-primary navbar-light">
                <a className="navbar-brand" href="#">
                    Single Page Aplication
                </a>

                {/** show and hide menu */}
                <button className="navbar-toggler" data-togler="collapse" 
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/** menu */}
                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Beranda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tentangsaya" className="nav-link">Tentang Saya</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/karya" className="nav-link">Karya</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bookgallery" className="nav-link">Book Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;