import React from 'react';
import backgroundPhoto from '../styles/jpg/background-about.jpg'

const AboutText = {
  title: 'Lawendowe pola pod Krakowem',
  content: '50km na północ od Krakowa położone jest polskie zagłębie lawendy, złożone z zakładanych wiele lat temu rodzinnych plantacji. Wiedza o tym, jak hodować lawendę przekazywana jest z pokolenia na pokolenie, z ojca na syna. Każda tutejsza rodzina posiada własne zwyczaje dotyczące sadzenia tej pięknej rośliny, jej pielęgnacji i zbioru, dlatego też każde lawendowe pole jest inne. Lawenda jest rośliną wieloletnią, jednakże wymaga wiele troski. Odpowiednio pielęgnowana odwdzięcza się na przełomie czerwca i lipca, dostarczając ogromnej ilości aromatycznego, fioletowego kwiatu. To właśnie wtedy można zobaczyc u nas ciągnące się po horyzont fioletowe łany.'
}

const About = () => (
  <div className="about">
    <img src={backgroundPhoto} alt="lavender field" />
    <div className="about-text">
      <h2>{AboutText.title}</h2>
      <p>{AboutText.content}</p>
      <button>Dowiedz się więcej</button>
    </div>
  </div>
);

export default About;