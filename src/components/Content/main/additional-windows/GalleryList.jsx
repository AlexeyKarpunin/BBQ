import React from 'react';
import PropTypes from 'prop-types';

class GalleryList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            picturesLinks: props.pictures,
        };

        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
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
         <img style="width: inherit;" className="gallery__modal__img" index=${e.target.getAttribute('index')} src=${e.target.getAttribute('src')}></img>
         <a onClick={this.closeModal} className="close" class="close"></a>
        `;
        modalWindow.classList.remove('--close__gallery');
    }

    closeModal (e) {
        if (e.target.classList.contains('gallery__arrow')) return;
        const modalWindow = document.querySelector('.modal__Gallery__window');
        modalWindow.classList.add('--close__gallery');
    }

    moveRight() {
        const modal = document.querySelector('.modal__Gallery');
        const modalImg = modal.getElementsByTagName('img');
        let index = Number(modalImg[0].getAttribute('index')) + 1;
        
        if (index > this.state.picturesLinks.length - 1) index = 0;
        modal.innerHTML = 
        `
        <img style="width: inherit;" className="gallery__modal__img" index=${index} src=${this.state.picturesLinks[index]}></img>
        <a onClick={this.closeModal} className="close" class="close"></a>
        `;
    }

    moveLeft() {
        const modal = document.querySelector('.modal__Gallery');
        const modalImg = modal.getElementsByTagName('img');
        let index = Number(modalImg[0].getAttribute('index')) - 1;
        
        if (index === 0) index = this.state.picturesLinks.length - 1;

        modal.innerHTML = 
        `
        <img style="width: inherit;" className="gallery__modal__img" index=${index} src=${this.state.picturesLinks[index]}></img>
        <a onClick={this.closeModal} className="close" class="close"></a>
        `;
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
                            <img onClick={this.modalGelleryImg} key={index} index={index} src={link}></img>
                        );
                    })}
                </div>
                <div onClick={this.closeModal} className="modal__Gallery__window --close__gallery">
                    <button onClick={this.moveLeft} title="Previous (Left arrow key)" type="button" className="mfp-arrow mfp-arrow-left gallery__arrow  gallery__arrow__rigth"></button>
                    <div className="modal__Gallery"></div>
                    <button onClick={this.moveRight} title="Next (Right arrow key)" type="button" className="mfp-arrow mfp-arrow-right gallery__arrow gallery__arrow__left"></button>
                </div>
            </section>
        );
    }
}

GalleryList.propTypes = {
    pictures: PropTypes.array,
};


export default GalleryList;