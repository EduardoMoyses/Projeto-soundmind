import {Link} from 'react-router-dom'
import styles from './navbar.module.css'
import Container from './container'

function Navbar() {
    return (
            <nav className={styles.navbar}>
                <Container>
                    <ul className={styles.list}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
    )
}

export default Navbar