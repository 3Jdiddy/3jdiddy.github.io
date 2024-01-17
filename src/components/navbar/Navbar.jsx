import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/scc.png" alt="" width={101} height={101}/>
            </div>
            <div>
                <h1>Second Congregational Church, UCC</h1>
            </div>
            <div>
                <Links/>
            </div>
        </div>
    )
}
export default Navbar

