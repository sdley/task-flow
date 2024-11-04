/* eslint-disable react/no-unescaped-entities */
import styles from "./Footer.module.css";

export const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <code className={styles.footer}>
                Avec TaskFlow, vous avez elimine X tache's'
            </code>
            <p className={styles.footer}>
                Copyright ©️&nbsp;
                <a 
                    href="https://diallosouleymane.github.io/" 
                    target="_blank"> sdley </a>&nbsp; 
                {currentYear}
            </p>

        </footer>
    );
}