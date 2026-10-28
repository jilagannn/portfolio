import { NavLink } from "react-router-dom"

export const Nav = () => {
    return(
        <nav>
            <div>
                <ul>
                    <li><a href="#aboutMe">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <NavLink to="/">Events</NavLink>
                </ul>
            </div>
        </nav>
    )
}