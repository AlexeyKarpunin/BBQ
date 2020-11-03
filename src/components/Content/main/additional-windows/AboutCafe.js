import React from 'react';
import Advantage from '../main-content/Advantage';

class AboutCafe extends React.Component {

    componentDidMount() {
        const header = document.querySelector('.header');
        header.classList.add('additional__menu__black__ground');
   
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        header.classList.remove('additional__menu__black__ground');
    }

    render () {
        return <Advantage />;
    }
}

export default AboutCafe;