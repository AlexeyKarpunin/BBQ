import React from 'react';
import Contancts from '../main-content/Contacts.jsx';

class Map extends React.Component {

    componentDidMount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        
        this.activationLink(navItemsArr);
        header.classList.add('additional__menu__black__ground');
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);
        header.classList.remove('additional__menu__black__ground');
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#map') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#map') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }
    
    render() {
        return <Contancts />;
    }
}

export default Map;