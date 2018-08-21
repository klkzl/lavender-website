import React from 'react';

const offerOptions = [
  {
    icon: 'icon-pagelines',
    title: 'Susz lawendowy',
    content: 'Ekologiczny susz ze świeżych zbiorów, z wysoką zawartością olejków eterycznych. Do wykorzystania spożywczego, kosmetycznego.',
  },
  {
    icon: 'icon-camera-alt',
    title: 'Sesje plenerowe',
    content: 'Sesje fotograficzne pośród kwiatów lawendy na przełomie czerwca i lipca. Rodzinne, narzeczeńskie, ze zwierzętami.',
  },
  {
    icon: 'icon-envira',
    title: 'Świeże bukiety',
    content: 'Świeżo ścięte kwiaty, do wykorzystania przy uroczystościach oraz jako ozdoba domu. Po zasuszeniu pozostają piękne przez cały rok.',
  },
  {
    icon: 'icon-beaker',
    title: 'Olejki eteryczne',
    content: 'Zatrzymaj ze sobą niezwykły zapach ekologicznej lawendy na dłużej. Ukoi nerwy, pomoże w zasypianiu.',
  },
  {
    icon: 'icon-birthday',
    title: 'Imprezy okolicznościowe',
    content: 'Zorganizuj wyjątkowe spotkanie dla bliskich w niezwykłej scenerii. Poczuj się jak w południowej Francji jedynie godzinę drogi od Krakowa.',
  },
  {
    icon: 'icon-home',
    title: 'Agroturystyka',
    content: 'Spędź czas z rodziną i przyjaciółmi na łonie natury, pośród fioletowych pól ciągnących się aż po horyzont.',
  },
]

const Offer = ({ title }) => (
  <div className="offer">
    <h2>{title}</h2>
    <ul className="offer-items">
      {offerOptions.map(({ icon, title, content }) => (
        <li key={title}>
          <div className="offer-icon">
            <i className={icon}></i>
          </div>
          <h3>{title}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  </div>
);

Offer.defaultProps = {
  title: 'Co możemy dla Ciebie zrobić?'
}

export default Offer;