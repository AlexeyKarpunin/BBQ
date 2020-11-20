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
                            <a className="navigation__link" data-link='#about' href='/'>О кафе</a>
                        </li>
                        <li className="navigation__item">
                            <Link to="/menuOutSide" className="navigation__link" data-link='#menu-out-side'>Меню на вынос, доставка</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/menu" className="navigation__link" data-link='#menu'>Меню</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to='/stoks' className="navigation__link" data-link='#stoks'>Акции</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/delevery" className="navigation__link" data-link='#delivery'>Условия доставки</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/main-gallery" className="navigation__link" data-link='#gallery'>Галерея</Link>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="/map" data-link='#map'>Контакты</a>
                        </li>
                    </ul>
                    <div className="header__info">
                        <a className="phone__footer" href="tel:88512999616">999-616</a>
                        <ul className="social">
                            <li className="social__item">
                                <a className="social__link" href="">
                                    <img src='../../img/inst.png' alt="Мы в Инстаграмме"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </footer>
        );
    }
}

export default Footer;