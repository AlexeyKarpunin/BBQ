import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            link: props.link,
            buttonName: props.button,
            picturesLinks: props.img,
        };

        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
    }

    componentDidMount () {
        const rigthArrow = document.querySelector('.gallery__arrow__rigth');
        const leftArrow = document.querySelector('.gallery__arrow__left');
        const closeBtn = document.querySelector('.modal__Gallery__window');
        
        closeBtn.addEventListener('click', this.closeModal);
        rigthArrow.addEventListener('click', this.moveRight);
        leftArrow.addEventListener('click', this.moveRight);

    }

    componentWillUnmount () {}

    modalGelleryImg (e) {
        const modal = document.querySelector('.modal__Gallery');
        const body = document.querySelector('body');
        body.classList.add('overflow__non__list');
        const modalWindow = document.querySelector('.modal__Gallery__window');
        modal.innerHTML =
         `
         <img style="width: inherit;" className="gallery__modal__img" index=${e.target.getAttribute('index')} src=${e.target.getAttribute('src')}></img>
         <a className="close" class="close"></a>
        `;
        modalWindow.classList.remove('--close__gallery');
    }

    closeModal (e) {
        if (e.target.classList.contains('gallery__arrow')) return;
        const body = document.querySelector('body');
        body.classList.remove('overflow__non__list');
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
        <a className="close" class="close"></a>
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
        <a className="close" class="close"></a>
        `;
    }
    
    render () {
        const {buttonName, picturesLinks} = this.state;
        return (
            <section className="gallery" id="gallery">
                <h2 className="gallery__title">{this.state.header}</h2>
                <ul className="gallery__list">
                    {picturesLinks.map((link, index) => {
                        return (
                            <li key={index} className="gallery__item">
                                <img className="gallery__modal__img" onClick={this.modalGelleryImg} index={index} src={link} alt=""></img>
                            </li>
                        );
                    })}
                </ul>
                {buttonName === 'null' ? null : <Link to={this.state.link} className="gallery__btn btn" href="">{this.state.buttonName}</Link>}
            </section>
        );
    }
}

Gallery.propTypes = {
    header: PropTypes.string,
    link: PropTypes.string,
    button: PropTypes.string,
    img: PropTypes.array,
};

export default Gallery;