import React from 'react';
import Delivery from '../main-content/Delivery.jsx';

class DeliveryWindow extends React.Component {

    componentDidMount() {
        const header = document.querySelector('.header');
        header.classList.add('additional__menu__black__ground');
   
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        header.classList.remove('additional__menu__black__ground');
    }

    render () {
        return <Delivery />;
    }
}

export default DeliveryWindow;