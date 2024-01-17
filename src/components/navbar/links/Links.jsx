import Link from "next/link"
import styles from "./links.module.css"

const Links = () => {

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/who-we-are",
        },
        {
            title: "Faith and Worship",
            path: "/faith-and-worship",
        },
        {
            title: "Community",
            path: "/community",
        },
        {
            title: "Calendar",
            path: "/calendar",
        },
        {
            title: "Connect",
            path: "/connect",
        },
    ]

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <Link className={styles.link} href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links
