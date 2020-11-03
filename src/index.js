import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import './styles/main.scss';

import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Main from './components/Content/main/Main';
import MenuList from './components/Content/main/additional-windows/MenuList';
import GalleryList from './components/Content/main/additional-windows/GalleryList.js';
import Stoks from './components/Content/main/additional-windows/Stoks';
import Map from './components/Content/main/additional-windows/Map';
import AboutCafe from './components/Content/main/additional-windows/AboutCafe';
import DeliveryWindow from './components/Content/main/additional-windows/DeliveyWindow';

ReactDOM.render(<BrowserRouter>
    <App>
        <Switch>
            <Route exact path='/' component={Main} /> 
            <Route path='/menu' component={MenuList} />
            <Route path='/gallery' component={GalleryList}/>
            <Route path='/stoks' component={Stoks}/>
            <Route path='/map' component={Map}/>
            <Route path='/about-cafe' component={AboutCafe}/>
            <Route path='/delevery' component={DeliveryWindow}/>
        </Switch>
    </App>
</BrowserRouter> , document.getElementById('root'));

window.addEventListener('popstate',function() {
    window.location.href='/';
});

const menu = document.querySelector('.header__navigation');
const menuBtn = document.querySelector('.header__nav-btn');
const btnSvg = document.querySelector('.ham1');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('header__navigation--show');
    menuBtn.classList.toggle('header__nav-btn--active');
    btnSvg.classList.toggle('active');
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


modalSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    modalSubmit.innerHTML = typeForm === 'delivery' ? '<p class="modal__title">Ваша заявка принята!</p>' : '<p class="modal__title">Ваш отзыв получен!</p>';
});

const map = L.map('map', {
    center: [46.367920, 48.066326],
    zoom: 13,
    scrollWheelZoom: false
});

const myIcon = L.icon({
    iconUrl: 'img/icon.png',
    iconSize: [60, 60],
});

L.marker([46.400367, 48.091495], {icon: myIcon}).addTo(map).bindTooltip('Жилая, 1');
L.marker([46.355315, 48.077743], {icon: myIcon}).addTo(map).bindTooltip('Куликова 50в');
L.marker([46.333398, 48.012269], {icon: myIcon}).addTo(map).bindTooltip('Богдана Хмельницкого, 10а');

L.tileLayer.provider('Jawg.Dark', {
    accessToken: 'c61oqWrV1RRTACkEr2NzXh4veCu7O4f9Ue2fru1eAikIn0EDpOi2CECI8dERQMBQ'
}).addTo(map);

deliveryBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalSubmit.innerHTML = modalTemplate();
    modal.classList.remove('modal--close');
    typeForm = 'delivery';
});

reviewsBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalSubmit.innerHTML = modalReviewsTemplate();
    modal.classList.remove('modal--close');
    typeForm = 'review';
});

$('a.scroll-to').on('click', function(e) {
    if (window.location.pathname === '/') {
        e.preventDefault();
        const anchor = e.target.getAttribute('data-link');
        $('html,body').animate({scrollTop:$(anchor).offset().top+'px'},{duration:1E3});
    }
});

// $('a.scroll-to').on('click', function(e){
    
//     if (window.location.pathname === '/') {
//         e.preventDefault();
//         // window.location.pathname =`/${e.target.getAttribute('data-name')}`;
//         const anchor = $(this).attr('to');
//         $('html, body').stop().animate({
//             scrollTop: $(anchor).offset().top
//         }, 800);

//         const elements = document.querySelectorAll('.navigation__link');
    
//         if (elements) {
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.remove('navigation__link--active');
//             }
//         }
//         $(this).addClass('navigation__link--active');
//     }
// });

// const hiddenElement = document.getElementById('box');
// const btn = document.querySelector('.a.scroll-to');

// function handleButtonClick() {
//     e.preventDefault();
//     // hiddenElement.scrollIntoView({block: 'center', behavior: 'smooth'});
//     console.log('i am work')
// }

// btn.addEventListener('click', handleButtonClick);


