import React, { Component } from 'react';

const footerItems = [
    {
        href: '#',
        label: 'Kontakt'
    },
    {
        href: '#',
        label: 'Polityka prywatności'
    },
    {
        href: '#',
        label: 'Warunki korzystania'
    },
    {
        href: '#',
        label: 'Zwroty'
    }
];

const footerMedia = [
    {
        href: 'https://www.facebook.com/',
        icon: 'icon-facebook'
    },
    {
        href: 'https://www.instagram.com/',
        icon: 'icon-instagram'
    },
    {
        href: 'https://twitter.com/',
        icon: 'icon-twitter'
    },
    {
        href: 'https://www.youtube.com/',
        icon: 'icon-youtube'
    },
    {
        href: 'http://silicon-valley.wikia.com/wiki/Pied_Piper_(company)',
        icon: 'icon-pied-piper'
    }
];

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <h4>Subskrypcja newslettera</h4>
                <form>
                    <input id="newsletter" name="email" placeholder="Podaj swoj email" required type="email" 
                    />
                    <input value="Subskrybuj" type="submit" />
                </form>
                <ul className="footer-menu">
                {footerItems.map((el, index) => (
                    <li key={index}>
                        <a href={el.href}>
                            {el.label}
                        </a>
                    </li>
                ))}
            </ul>
                <h4>Follow us.</h4>
                <div className="social">
                    {footerMedia.map((el => (
                        <a 
                            key={el.icon.toString()} 
                            href={el.href} 
                            target="_blank"
                        >
                            <i className={el.icon}></i>
                        </a>
                    )))}
                </div>
                <div className="">
                    <small>
                        <p>Copyright © 2018. Wszelkie prawa zastrzeżone.</p>
                        <p>Wykonanie: kl_kzl</p>
                    </small>
                </div>
            </footer>
        );
    }
};

export default Footer;