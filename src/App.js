import React, { Component } from 'react';
import { Header, Body, Footer } from './components';

export default class App extends Component {//prototype pattern
    constructor() {
        super();
        let parentElement = document.getElementsByTagName("html");
        parentElement[0].style.setProperty('--primaryColor', process.env.REACT_APP_PRIMARY_COLOR);
        parentElement[0].style.setProperty('--secondaryColor', process.env.REACT_APP_SECONDARY_COLOR);
    }


    render() {
        let brandName = process.env.REACT_APP_BRAND_NAME;
        let logo = process.env.REACT_APP_LOGO;

        return (
            <>
                <Header
                    brandName={brandName}
                    logo={logo}
                />
                <Body
                    content={'abc'}
                />
                <Footer />
            </>
        )
    }
}