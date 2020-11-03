import React from 'react';
import { Link } from 'react-router-dom';
import {headersDataAtr} from '../../enums';

class Footer extends React.Component {
    render () {
        const {aboutCafe, menu, delivery, galley, map} = headersDataAtr;
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <img src="../../img/logo.png" alt=""></img>
                    <ul className="navigation navigation--footer">
                        <li className="navigation__item">
                            <Link to="about-cafe" data-name={aboutCafe} className="navigation__link scroll-to" data-link='#about'>О кафе</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="delevery" className="navigation__link scroll-to" data-link='#delivery'>Доставка</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="menu" className="navigation__link scroll-to" data-link='#menu'>Меню</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="gallery" className="navigation__link scroll-to" data-link='#gallery'>Галлерея</Link>
                        </li>
                        <li className="navigation__item">
                            <a data-name={map} className="navigation__link scroll-to" data-link='#map' href="/map">Посмотреть на карте</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;