import Link from "next/link"

const Links = () => {

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Who we are",
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
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links
