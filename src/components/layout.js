import * as React from 'react'
import { Link } from 'gatsby'
import * as test from './layout.module.css'

const Layout = ({ pageTitle, children}) => {
    return (
        <div className={test.container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={test.navLinks}>
                    <li className={test.navLinkItem}>
                        <Link to="/" className={test.navLinkText}>
                           Home
                        </Link>
                    </li>
                    <li className={test.navLinkItem}>
                        <Link to="/about" className={test.navLinkText}>
                         About me</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={test.heading}>{pageTitle}</h1>
                {children}
                <h2 className={test.subtitle}>Coucou</h2>
            </main>
        </div>
    )
}

export default Layout