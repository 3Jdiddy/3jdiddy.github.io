import Link from "next/link"
import NavLink from "./navLink/navLink"
import styles from "./links.module.css"

const Links = () => {

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Calendar",
            path: "/calendar",
        },
        {
            title: "Community",
            path: "/community",
        },
        {
            title: "Connect",
            path: "/connect",
        },
    ]

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}
        </div>
    )
}

export default Links
