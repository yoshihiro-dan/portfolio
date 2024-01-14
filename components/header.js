import Link from 'next/link'
import styles from 'src/app/page.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <h1>Yoshihiro Dan Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="#top" legacyBehavior>
                            <a>TOP</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#skill" legacyBehavior>
                            <a>Skill</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#works" legacyBehavior>
                            <a>Works</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" legacyBehavior>
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}