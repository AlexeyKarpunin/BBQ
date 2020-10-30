import React from 'react';
import Banner from './main-content/Banner';
import Menu from './main-content/Menu';
import Adventage from './main-content/Advantage';
import Delivery from './main-content/Delivery';
import Gallegy from './main-content/Gallery';
import Reviews from './main-content/Reviews';
import Contacts from './main-content/Contacts';


class Main extends React.Component {
    render () {
        return (
            <main>
                <Banner/>
                <Menu />
                <Adventage />
                <Delivery />
                <Gallegy />
                <Reviews />
                <Contacts />
            </main>
        );
    }
}

export default Main;