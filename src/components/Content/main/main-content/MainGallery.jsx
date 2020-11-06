import React from 'react';
import Gallery from './Gallery.jsx';
import {tatisheva} from '../galleryObjectsIMG';

class MainGallery extends React.Component {
    componentDidMount() {
        window.scrollTo(pageXOffset, 0);
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
    
        this.activationLink(navItemsArr);
        header.classList.add('additional__menu__black__ground');
        body.classList.add('additional__gallery__container');
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);
        header.classList.remove('additional__menu__black__ground');
        body.classList.remove('additional__gallery__container');
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#gallery') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#gallery') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }
    render () {
        return (
            <section>
                <Gallery {...{
                    header: 'Галлерея кафе на улице Татищева 43а',
                    link:'/galleryTatisheva',
                    button: 'null',
                    img: tatisheva,
                }} />
                <Gallery {...{
                    header: 'Галлерея кафе на улице Астраханская 51и/1',
                    link:'/galleryAstrakhanskay',
                    button: 'null',
                    img: tatisheva,
                }} />
                <Gallery {...{
                    header: 'Галлерея кафе на улице Куликкова 50в',
                    link:'/gallerykulikova',
                    button: 'null',
                    img: tatisheva,
                }} />

            </section>
        );
    }
}

export default MainGallery;