import React from 'react';


class Map extends React.Component {

    componentDidMount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        
        this.activationLink(navItemsArr);
        header.classList.add('additional__menu__black__ground');
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);
        header.classList.remove('additional__menu__black__ground');
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#map') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#map') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }
    
    render() {
        return(
            <section className="contacts">
                <div className="contacts__info">
                    <div className="contacts__wrapper">
                        <h2 className="contacts__title">Мы ждем вас в&nbsp;гости!</h2>
                        <ul className="contacts__list">
                            <li className="contacts__item">
                                <p className="contacts__address">Куликова, 50в</p>
                                <a className="contacts__phone" href="tel:89275555828">+7‒927‒5‒555‒828</a> <br></br> <br></br>
                                <a className="contacts__phone" href="tel:88512773077">+7 (8512) 77‒30‒77</a>
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">Татищева, 43а</p>
                                <a className="contacts__phone" href="tel:89275699696">+7‒927‒569‒96‒96</a> <br></br> <br></br>
                                <a className="contacts__phone" href="tel:88512999696">+7 (8512) 99‒96‒96</a>
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">Астраханская 51и/1</p>
                                <a className="contacts__phone" href="tel:89512758758">+7 (8512) 75‒87‒58</a>
                            </li>
                        </ul>
                        <div className="contacts__social">
                            <a className="contacts__link" href="">
                                <img src='../../../img/vk-red.png' alt="Наша группа"></img>
          Наша группа
                            </a>
                            <a className="contacts__link" href="">
                                <img src='../../../img/inst-red.png' alt="Наша группа"></img>
          Наш instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="map" id="map"></div>
            </section>
        );
    }
}

export default Map;