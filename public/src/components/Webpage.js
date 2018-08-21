import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

class Webpage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main />
                <Footer />
            </div>
        );
    }
}

export default Webpage;