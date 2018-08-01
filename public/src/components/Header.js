import React, { Component } from 'react';

const navItems = [
    {
        href: '#',
        label: 'Intro'
    },
    {
        href: '#',
        label: 'O nas'
    },
    {
        href: '#',
        label: 'Oferta'
    },
    {
        href: '#',
        label: 'Galeria'
    },
    {
        href: '#',
        label: 'Kontakt'
    },
];

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-bar">
                    <nav className="navbar">
                        <a href="#" className="logo-link">Lavender Story</a>
                        <ul className="header-nav">
                            {/*
                            {navItems.map(({href, label}) => (
                            <li ><a href={href}>{label}</a> </li>
                            ))}
                            */}
                            {navItems.map((el) => (
                                <li key={el.label.toString()}>
                                    <a href={el.href}>{el.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="main-title">
                        <h1>Nunc turpis purus</h1>
                        <p>Naturalne produkty | Sesje fotograficzne | Agroturystyka</p>
                    </div>
            </header>
        );
    }
}

export default Header;