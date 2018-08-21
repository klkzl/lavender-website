import React from 'react';
import mainBackground from '../styles/jpg/background.jpg';

const navItems = [
    {
        href: '#',
        label: 'Strona główna'
    },
    {
        href: '#',
        label: 'O nas'
    },
    {
        href: '#',
        label: 'Galeria'
    },
    {
        href: '#',
        label: 'Oferta'
    },
    {
        href: '#',
        label: 'Kontakt'
    },
];

const Header = ({ logo, subtitle, title }) => (
    <header className="header">
        <img src={mainBackground} alt="background flowers" />
        <div className="main-title">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
        <div className="header-bar">
            <nav className="navbar">
                <a href="#" className="logo-link">{logo}</a>
                <ul className="header-nav">
                    {navItems.map(({ href, label }) => (
                        <li key={label}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

Header.defaultProps = {
    title: 'Welcome to our Lavender Story',
    subtitle: 'Naturalne produkty | Sesje plenerowe | Agroturystyka',
    logo: 'Lavender Story'
}

export default Header;