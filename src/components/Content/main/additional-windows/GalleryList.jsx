import React from 'react';
import PropTypes from 'prop-types';

class GalleryList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            picturesLinks: props.pictures,
        };
    }

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

    modalGelleryImg (e) {
        const modal = document.querySelector('.modal__Gallery');
        const modalWindow = document.querySelector('.modal__Gallery__window');
        modal.innerHTML =
         `
         <img style="width: inherit;" className="gallery__modal__img"  src=${e.target.getAttribute('src')}></img>
         <a onClick={this.closeModal} className="close" class="close"></a>
        `;
        modalWindow.classList.remove('--close__gallery');
    }

    closeModal (e) {
        const modalWindow = document.querySelector('.modal__Gallery__window');
        modalWindow.classList.add('--close__gallery');
    }

    render () {
        return (
            <section className="additional__gallery__list">
                <div className="additional__gallery__header">
                    <h2 className="">Галерея кафе</h2>
                    <div></div>
                </div>
                <div className="additional__gallery__grid">
                    {this.state.picturesLinks.map((link, index) => {
                        return (
                            <img onClick={this.modalGelleryImg} key={index} src={link}></img>
                        );
                    })}
                </div>
                <div onClick={this.closeModal}className="modal__Gallery__window --close__gallery">
                    
                    <div className="modal__Gallery"></div>
                </div>
            </section>
        );
    }
}

GalleryList.propTypes = {
    pictures: PropTypes.array,
};


export default GalleryList;