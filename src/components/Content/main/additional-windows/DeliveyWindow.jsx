import React from 'react';
import Delivery from '../main-content/Delivery.jsx';

class DeliveryWindow extends React.Component {

    componentDidMount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        header.classList.add('additional__menu__black__ground');
        this.activationLink(navItemsArr);
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);
        header.classList.remove('additional__menu__black__ground');
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#delivery') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#delivery') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    render () {
        return <Delivery />;
    }
}

export default DeliveryWindow;