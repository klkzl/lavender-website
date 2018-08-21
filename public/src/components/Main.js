import React from 'react';

import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Offer from './Offer';

// const articleItems = [
//     {
//         title: 'Lawendowe pola pod Krakowem',
//         content: '50km na północ od Krakowa położone jest polskie zagłębie lawendy. Tutejsze rodzinne plantacje powstały wiele lat przed nastaniem mody na ekologiczne produkty. Wiedza o tym, jak hodować lawendę przekazywana jest z pokolenia na pokolenie, z ojca na syna. Każda tutejsza rodzina posiada własne zwyczaje dotyczące sadzenia tej pięknej rośliny, jej pielęgnacji i zbioru, dlatego też każde lawendowe pole jest inne. Lawenda jest rośliną wieloletnią, jednakże wymaga wiele troski. Odpowiednio pielęgnowana odwdzięcza się na przełomie czerwca i lipca, dostarczając ogromnej ilości aromatycznego, fioletowego kwiatu. To właśnie wtedy można zobaczyc u nas ciągnące się po horyzont fioletowe łany.'
//     },
//     {
//         title: '', 
//         content: 'Hodowana w naszych stronach lawenda przeznaczona jest głównie na susz, z ktorego pozyskuje się olejki aromatyczne, o udowodnionym pozytywnym wpływie na ludzki organizm. Ususzone kwiaty można włożyć też do płóciennego woreczka i trzymać przy poduszce - pomogą w zasypianiu, albo w szafie - odstraszą mole. Świeże kwiaty wykorzystywane są do robienia bukietów i kwiatowych dekoracji, często wykorzystywanych w uroczystościach. Bukiety wygladają i pachną pieknie zarówno zaraz po ścięciu, jak i później - przez cały rok, jesli zostają zasuszone. Z roku na rok w okresie przed lawendowymi żniwami przybywa nam gości, zainteresowanych sesjami fotograficznymi: rodzinnymi czy też ulubionych czworonogów.'
//     },
//     {
//         title: 'Duis iaculis purus',
//         content: 'Pellentesque hendrerit tortor eget ligula gravida mattis. Fusce non tellus eget elit lobortis feugiat. Maecenas rhoncus rutrum felis, quis pretium lectus egestas vel. Curabitur ut diam ornare, euismod urna ut, vulputate turpis. Vivamus diam sapien, convallis vel tellus tempor, congue volutpat erat. Aenean tempor in odio quis ultricies. Mauris eu leo aliquam, molestie purus quis, luctus odio. Duis dictum volutpat ex, eget lobortis nunc scelerisque vitae.'
//     },
//     {
//         title: 'Proin porta',
//         content: 'Quisque non ante vitae tellus egestas elementum sed sit amet arcu. Vestibulum ac vulputate turpis, id pretium eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie a nisi at fringilla. Nulla dui dolor, mollis ut enim suscipit, aliquam elementum leo. Suspendisse ut arcu ac purus aliquam tempus. Morbi pellentesque diam ac pellentesque accumsan. Duis varius efficitur tincidunt. Vestibulum mi mi, ultrices id porttitor suscipit, convallis vel metus. Suspendisse egestas sagittis diam sit amet fermentum. '
//     }
// ]

class Main extends React.Component {
    render() {
        return (
            <div className="content">
                <section>
                    <About />
                </section>
                <section>
                    <Offer />
                </section>
                <section>
                    <Gallery />
                </section>
                <section>
                {/*
                <section>
                    <Contact />
                </section> */}
                {/*
                <div className="gallery-section">
                        <h2>Galeria</h2>
                        <p>Quisque non ante vitae tellus egestas elementum sed sit amet arcu. Vestibulum ac vulputate turpis, id pretium eros.</p>
                        <img src={firstPhoto} alt="" className="main-photo" />
                        {photos.map(el => (
                            <img key={el.alt} src={el.src} alt={el.src} className="small-photo"/>
                        ))}
                    </div>
                </section>
                {/*
                <section>
                    <div className="article-section">
                        {articleItems.map((el) => (
                            <article key={el.date}>
                                <div className="article-item">
                                    <h3>{el.title}</h3>
                                    <p>{el.content}</p>
                                    <button>Dowiedz się więcej</button>
                                </div>
                            </article>
                        ))}
                    </div>*/}
                    </section> 
            </div>
        );
    }
}

export default Main;