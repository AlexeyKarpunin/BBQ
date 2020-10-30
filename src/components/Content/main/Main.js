import React from 'react';
import PropTypes from 'prop-types';

import Banner from './main-content/Banner';
import Menu from './main-content/Menu';
import Adventage from './main-content/Advantage';
import Delivery from './main-content/Delivery';
import Gallegy from './main-content/Gallery';
import Reviews from './main-content/Reviews';
import Contacts from './main-content/Contacts';



class Main extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {changeContent} = this.props;
        return (
            <main>
                <Banner/>
                <Menu {...{change: changeContent}}/>
                <Adventage />
                <Delivery />
                <Gallegy />
                <Reviews />
                <Contacts />
            </main>
        );
    }
}

Main.propTypes = {
    changeContent: PropTypes.func
};

         
export default Main;