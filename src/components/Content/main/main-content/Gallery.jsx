import React from 'react';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            link: props.link,
            buttonName: props.button,
            picturesLinks: props.img,
            modalImg: props.modalImg,
        };

        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.modalGelleryImg = this.modalGelleryImg.bind(this);
        this.fullScrean = this.fullScrean.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount () {
        const closeBtn = document.querySelector('.modal__Gallery__window');

        closeBtn.addEventListener('click', this.closeModal);
    }

    componentWillUnmount () {
        const closeBtn = document.querySelector('.modal__Gallery__window');
      
        closeBtn.removeEventListener('click', this.closeModal);
    }

    fullScrean () {
        if (!document.fullscreenElement) {
            const body = document.querySelector('.fullscreen__body');
            const closeBtn = document.querySelector('.close');
            closeBtn.classList.add('--close__gallery');
            body.classList.add('full');
            document.documentElement.requestFullscreen();
        } else {
            const body = document.querySelector('.fullscreen__body');
            const closeBtn = document.querySelector('.close');

            body.classList.remove('full');
            closeBtn.classList.remove('--close__gallery');
            document.exitFullscreen();
        }
    }

    modalGelleryImg (e) {
        const body = document.querySelector('body');
        body.classList.add('overflow__non__list');
        const modalWindow = document.querySelector('.modal__Gallery__window');
        const index = e.target.getAttribute('index');
        modalWindow.innerHTML =
      ` 
      <section class="full__screen">
        
                <div class="fullscreen__body ${document.fullscreenElement ? 'full' : null}">
                      <button class="fullscreen__arrow fullscreen__arrow__left"></button>
                      <div class="fullscreen__container">
                        <a class="close ${document.fullscreenElement ? '--close__gallery' : null}"></a>
                        <img class="fullscreen__img" index=${index} src=${this.state.modalImg[index]}></img>
                          <div class="full__screan_btn">
                            <img class="full__screan__img" src='../../../../img/full-screan.png' alt='full-screan'></img>
                          </div>
                      </div>
                      <button class="fullscreen__arrow fullscreen__arrow__right"></button>
                </div>
        </section>`;
        modalWindow.classList.remove('--close__gallery');
    }


    closeModal (e) {

        if (e.target.classList.contains('fullscreen__arrow__left')) {
            this.moveLeft();
            return;
        };

        if (e.target.classList.contains('fullscreen__arrow__right')) {
            this.moveRight();
            return;
        };

        if (e.target.classList.contains('full__screan_btn') || e.target.classList.contains('full__screan__img')) {
            this.fullScrean();
            return;
        }

        if(document.fullscreenElement) {
            const body = document.querySelector('.fullscreen__body');
            const closeBtn = document.querySelector('.close');

            body.classList.remove('full');
            closeBtn.classList.remove('--close__gallery');

            document.exitFullscreen();
            return;
        }

        const body = document.querySelector('body');
        body.classList.remove('overflow__non__list');
        const modalWindow = document.querySelector('.modal__Gallery__window');
        modalWindow.classList.add('--close__gallery');
    }

    moveRight() {
        const modalWindow = document.querySelector('.modal__Gallery__window');
        const modalImg = modalWindow.getElementsByTagName('img');
        let index = Number(modalImg[0].getAttribute('index')) + 1;

        if (index > this.state.picturesLinks.length - 1) index = 0;
        modalWindow.innerHTML =
        ` 
        <section class="full__screen">
          
        <div class="fullscreen__body ${document.fullscreenElement ? 'full' : null}">
                        <button class="fullscreen__arrow fullscreen__arrow__left"></button>
                        <div class="fullscreen__container">
                          <a class="close ${document.fullscreenElement ? '--close__gallery' : null}"></a>
                          <img class="fullscreen__img" index=${index} src=${this.state.modalImg[index]}></img>
                            <div class="full__screan_btn">
                              <img class="full__screan__img" src='../../../../img/full-screan.png' alt='full-screan'></img>
                            </div>
                        </div>
                        <button class="fullscreen__arrow fullscreen__arrow__right"></button>
                  </div>
          </section>`;
    }

    moveLeft() {
        const modalWindow = document.querySelector('.modal__Gallery__window');
        const modalImg = modalWindow.getElementsByTagName('img');
        let index = Number(modalImg[0].getAttribute('index')) - 1;
        
        if (index <= 0) index = this.state.picturesLinks.length - 1;

        modalWindow.innerHTML =
        ` 
        <section class="full__screen">
                 <div class="fullscreen__body ${document.fullscreenElement ? 'full' : null}">
                        <button class="fullscreen__arrow fullscreen__arrow__left"></button>
                        <div class="fullscreen__container">
                          <a class="close ${document.fullscreenElement ? '--close__gallery' : null}"></a>
                          <img class="fullscreen__img" index=${index} src=${this.state.modalImg[index]}></img>
                            <div class="full__screan_btn">
                              <img class="full__screan__img" src='../../../../img/full-screan.png' alt='full-screan'></img>
                            </div>
                        </div>
                        <button class="fullscreen__arrow fullscreen__arrow__right"></button>
                  </div>
          </section>`;
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
                {buttonName === 'null' ? null : <a to={this.state.link} className="gallery__btn btn" href="/main-gallery">{this.state.buttonName}</a>}
                
            </section>
        );
    }
}

Gallery.propTypes = {
    header: PropTypes.string,
    link: PropTypes.string,
    button: PropTypes.string,
    img: PropTypes.array,
    modalImg: PropTypes.array,
};

export default Gallery;