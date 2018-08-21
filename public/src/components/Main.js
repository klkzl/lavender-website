import React from 'react';

import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Offer from './Offer';

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
                {/*
                <section>
                    <Contact />
                </section>
                */}
            </div>
        );
    }
}

export default Main;