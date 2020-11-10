import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


import './styles/main.scss';

import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Main from './components/Content/main/Main.jsx';
import MenuList from './components/Content/main/additional-windows/MenuList.jsx';
import GalleryList from './components/Content/main/additional-windows/GalleryList.jsx';
import Stoks from './components/Content/main/additional-windows/Stoks.jsx';
import Map from './components/Content/main/additional-windows/Map.jsx';
import AboutCafe from './components/Content/main/additional-windows/AboutCafe.jsx';
import DeliveryWindow from './components/Content/main/additional-windows/DeliveyWindow.jsx';
import MenuOutSide from './components/Content/main/additional-windows/MenuOutSide.jsx';
import MainGallery from './components/Content/main/main-content/MainGallery.jsx';

ReactDOM.render(
    <div className=".body">
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Main} /> 
                    <Route path='/menu' component={MenuList} />
                    <Route path='/main-gallery' component={MainGallery} />
                    <Route path='/stoks' component={Stoks}/>
                    <Route path='/map' component={Map}/>
                    <Route path='/about-cafe' component={AboutCafe}/>
                    <Route path='/delevery' component={DeliveryWindow}/>
                    <Route path='/menuOutSide' component={MenuOutSide}/>
                </Switch> 
            </App>
        </BrowserRouter> 
        <div className="modal__Gallery__window --close__gallery">
            <button title="Previous (Left arrow key)" type="button" className="mfp-arrow mfp-arrow-left gallery__arrow  gallery__arrow__rigth"></button>
            <div className="modal__Gallery">
                <a className="close"></a>
            </div>
            <button title="Next (Right arrow key)" type="button" className="mfp-arrow mfp-arrow-right gallery__arrow gallery__arrow__left"></button>
        </div>
    </div>
    , document.getElementById('root'));

window.addEventListener('popstate',function() {
    window.location.href='/';
});

const menu = document.querySelector('.header__navigation');
const menuBtn = document.querySelector('.header__nav-btn');
const btnSvg = document.querySelector('.ham1');
const mobileMap = document.querySelector('.map');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('header__navigation--show');
    menuBtn.classList.toggle('header__nav-btn--active');
    btnSvg.classList.toggle('active');
    if (mobileMap) mobileMap.classList.toggle('z_index--non--active');
});

$(document).ready(function(){
    $('.menu__carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false
    });

    $('.reviews__carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true
    });

    $('.banner__carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 700
    });
});

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>Шашлычный мир</small>';
            }
        }
    });
});


const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.modal__close');
const deliveryBtn = document.querySelector('.delivery__btn');
const reviewsBtn = document.querySelector('.reviews__btn');
const advantageBtn = document.querySelector('.advantage__btn');
const modalSubmit = modal.querySelector('.modal__form');
let typeForm;

const modalTemplate = () => {
    return (
        `<p class="modal__title">Оставьте заявку, мы вам перезвоним и уточним детали заказа</p>
     <input class="modal__input" type="text" required placeholder="Ваше имя" minlength="3">
     <input class="modal__input" type="tel" required placeholder="Ваш номер">
     <button class="modal__btn btn" type="submit">Отправить</button>`
    );
};

const modalAdvantageTemple = () => {
    return (
        `<p>
            <p class="modal__title">Тут будет схема брони или что типо того</p>
            <button class="modal__btn btn" type="submit">Забронировать</button>
        </p>`
    );
};

const modalReviewsTemplate = () => {
    return (
        `<p class="modal__title">Оставьте отзыв о нашем заведении</p>
    <input class="modal__input" type="text" required placeholder="Ваше имя" minlength="3">
    <textarea class="modal__input" name="review" id="review" cols="30" rows="10" placeholder="Ваш отзыв, не более 300 символов"></textarea>
    <button class="modal__btn btn" type="submit">Отправить</button>`
    );
};

modal.addEventListener('click', (evt) => {
    if (evt.target === modal) {
        modal.classList.add('modal--close');
    }
});

closeModal.addEventListener('click', (evt) => {
    modal.classList.add('modal--close');
});

if (advantageBtn) {
    advantageBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalSubmit.innerHTML = modalAdvantageTemple();
        modal.classList.remove('modal--close');
        typeForm = 'to book';
    });
}

if (deliveryBtn) {
    deliveryBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalSubmit.innerHTML = modalTemplate();
        modal.classList.remove('modal--close');
        typeForm = 'delivery';
    });
}

if (reviewsBtn) {
    reviewsBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalSubmit.innerHTML = modalReviewsTemplate();
        modal.classList.remove('modal--close');
        typeForm = 'review';
    });
}

modalSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    switch(typeForm) {
    case 'delivery':
        modalSubmit.innerHTML = '<p class="modal__title">Ваша заявка принята!</p>';
        break;
    case 'review':
        modalSubmit.innerHTML = '<p class="modal__title">Ваш отзыв получен!</p>';
        break;
    case 'to book':
        modalSubmit.innerHTML = '<p class="modal__title">Стол забронирован!</p>';
        break;
    default:
        modalSubmit.innerHTML = '<p class="modal__title">Мы ценим вас!!!</p>';
        break;
    }
});

const map = L.map('map', {
    center: [46.367920, 48.066326],
    zoom: 12,
    scrollWheelZoom: false
});

const myIcon = L.icon({
    iconUrl: 'img/icon.png',
    iconSize: [60, 60],
});

L.marker([46.369340, 48.050900], {icon: myIcon}).addTo(map).bindTooltip('Татищева 43а');
L.marker([46.299018, 48.050145], {icon: myIcon}).addTo(map).bindTooltip('Астраханская 51и/1');
L.marker([46.355315, 48.077743], {icon: myIcon}).addTo(map).bindTooltip('Куликова 50в');

L.tileLayer.provider('Jawg.Dark', {
    accessToken: 'c61oqWrV1RRTACkEr2NzXh4veCu7O4f9Ue2fru1eAikIn0EDpOi2CECI8dERQMBQ'
}).addTo(map);

$('a.scroll-to').on('click', function(e) {
    if (window.location.pathname === '/') {
        e.preventDefault();
        const anchor = e.target.getAttribute('data-link');
        $('html,body').animate({scrollTop:$(anchor).offset().top+'px'},{duration:1E3});
    }
});

const mobileLinkMenu = document.querySelector('.header__navigation');

mobileLinkMenu.addEventListener('click', () => {
    menu.classList.remove('header__navigation--show');
    menuBtn.classList.remove('header__nav-btn--active');
    btnSvg.classList.remove('active');
});


// const closeBtnGalleryModalWindow = document.querySelector('.close');

// const closeModalGalleryWindow = (e) => {
//     if (e.target.classList.contains('gallery__arrow')) return;
//     const modalWindow = document.querySelector('.modal__Gallery__window');
//     modalWindow.classList.add('--close__gallery');
// };

// closeBtnGalleryModalWindow.addEventListener('click', closeModalGalleryWindow);
