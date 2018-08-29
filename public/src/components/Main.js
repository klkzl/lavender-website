import React from 'react';

import About from './About';
import Gallery from './Gallery';
import Offer from './Offer';

import Slider from './Slider';

const Main =() => (
    <div className="content">
        <section>
            <About />
        </section>
        <section>
            <Offer />
        </section>
        {/*<section>
        <Gallery />
        </section>*/}
        <Slider />
    </div>
)

export default Main;