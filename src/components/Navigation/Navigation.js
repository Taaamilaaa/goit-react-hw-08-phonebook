import { Link } from "react-router-dom";
import styles from "./navigation.module.css"

export const Navigation = () => {
    return (       
            <nav className={styles.navigation}>
                <ul className ={styles.list}>
                    <li className ={styles.listItem}>
                        <Link to="/" className={styles.link}>Contacts</Link>
                    </li>
                     <li className ={styles.listItem}>
                        <Link to ="/login"className={styles.link}>Login</Link>
                    </li>
                     <li className ={styles.listItem}>
                        <Link to ="/register"className={styles.link}>Register</Link>
                    </li>
            </ul>
            </nav>
       
    )
}
