import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/scc.png" alt="" width={50} height={50}/>
            </div>
            <div className={styles.h1}>
              <h1>The Second Congregational Church</h1>
            </div>
            <div>
                <Links/>
            </div>
        </div>
    )
}
export default Navbar

