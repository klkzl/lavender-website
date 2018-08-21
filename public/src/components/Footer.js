import React from 'react';

const footerItems = [
    {
        href: '#',
        label: 'Kontakt'
    },
    {
        href: '#',
        label: 'Zwroty'
    },
    {
        href: '#',
        label: 'Polityka prywatności'
    },
    {
        href: '#',
        label: 'Warunki korzystania'
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

const Footer = ({ copyrights, newsletter, socialMedia }) => (
    <footer className="footer">
        <h4>{newsletter}</h4>
        <form autoComplete="off">
            <input 
                id="newsletter" 
                name="email" 
                placeholder="Podaj swoj email" 
                required type="email" 
            />
            <input 
                value="Subskrybuj" 
                type="submit" 
            />
        </form>
        <ul className="footer-menu">
            {footerItems.map(({ href, label }) => (
                <li key={label}>
                    <a href={href}>
                        {label}
                    </a>
                </li>
            ))}
        </ul>
        <h4>{socialMedia}</h4>
        <div className="social">
            {footerMedia.map(({ href, icon}) => (
                <a 
                    key={icon.toString()} 
                    href={href} 
                    target="_blank"
                >
                    <i className={icon}></i>
                </a>
            ))}
        </div>
        <div className="">
            <small>
                <p>{copyrights}</p>
                <p>Wykonanie: klkzl</p>
            </small>
        </div>
    </footer>
); 

Footer.defaultProps = {
    newsletter: 'Subskrypcja newslettera',
    socialMedia: 'Follow us.',
    copyrights: 'Copyright © 2018. Wszelkie prawa zastrzeżone.'
}

export default Footer;