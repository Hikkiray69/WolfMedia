'use client'

import css from "./navigation.module.css"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function Navigation() {

    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'О НАС' },
        { href: '/portfolio', label: 'ПОРТФОЛИО' },
        { href: '/favorites', label: 'ИЗБРАННОЕ' },
        { href: '/cases', label: 'КЕЙСЫ' },
    ]

    return (
        <nav className={css.content}>
            <ul className={css.navList}>
                {navItems.map((item) => (
                    <li key={item.href} className={css.navItem}>
                        <Link
                            href={item.href}
                            className={`${css.navLink} ${
                                pathname === item.href ? css.active : ''
                            }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
