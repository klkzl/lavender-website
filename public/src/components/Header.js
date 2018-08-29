import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import mainBackground from '../styles/jpg/background.jpg';

const navItems = [
    {
        href: '#top',
        label: 'Top'
    },
    {
        href: '#about',
        label: 'O nas'
    },
    {
        href: '#offer',
        label: 'Oferta'
    },
    {
        href: '#gallery',
        label: 'Galeria'
    },
    {
        href: '#contact',
        label: 'Kontakt'
    },
];

const Header = ({ logo, subtitle, title }) => (
    <header className="header" id="top" >
        <img src={mainBackground} alt="background flowers" />
        <div className="main-title">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
        <div className="header-bar">
            <nav className="navbar">
                <a href="#" className="logo-link">{logo}</a>
                <button className="menu-link">Menu</button>
                <ul className="header-nav">
                    {navItems.map(({ href, label }) => (
                        <li key={label}>
                            <AnchorLink href={href}>{label}</AnchorLink>
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