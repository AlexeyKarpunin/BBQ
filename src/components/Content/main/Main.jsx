import React from 'react';

import Banner from './main-content/Banner.jsx';
import Menu from './main-content/Menu.jsx';
import Adventage from './main-content/Advantage.jsx';
import Delivery from './main-content/Delivery.jsx';
import Gallery from './main-content/Gallery.jsx';
import Reviews from './main-content/Reviews.jsx';
import Contacts from './main-content/Contacts.jsx';

import {mainPageIMGGallery, modalMainPageIMGGallery} from './galleryObjectsIMG';

class Main extends React.Component {
   
    render () {  
        return (
            <main>
                <Banner />
                <Menu />
                <Adventage />
                <Delivery />
                <Gallery {...{
                    header: 'Наши галереи',
                    link: '/main-gallery',
                    button: 'Посмотреть все фото',
                    img: mainPageIMGGallery,
                    modalImg: modalMainPageIMGGallery,
                }} />
                <Reviews />
                <Contacts />
            </main> 
        );
    }
}
   
export default Main;