import {useState} from "react";
import {NavLink} from "react-router-dom";
// import { ReactComponent as Hamburger} from "../img/hamburger.svg";
import './navbar.css';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const toogleNavItems = () => {
        setShowNav(!showNav)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <p>LOGO</p>
                </div>
                <div className="menu-icon" onClick={toogleNavItems}>
                    <svg viewBox="0 0 310 259.34">
                        <title>{"Hamburger (Menu) Icon"}</title>
                        <g fill="none" stroke="#000" strokeLinecap="round" strokeWidth={49.336}>
                            <path d="M29.684 229.67h250.65M29.684 129.66h250.65M29.684 29.66h250.65" />
                        </g>
                    </svg>
                </div>
                <div className={`nav-elements ${showNav && 'active'}`}>
                    <ul>
                        <li><NavLink to="/">Nejbližší akce</NavLink></li>
                        <li><NavLink to="/n">Následující akce</NavLink></li>
                        <li><NavLink to="/o">O dobrovolničení</NavLink></li>
                        <li><NavLink to="/k">Kontakt</NavLink></li>
                        <li><NavLink to="/p">Přihlaš se</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar