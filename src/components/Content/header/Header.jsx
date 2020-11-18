import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        document.removeEventListener('keydown', this.scroll);
    }

    scroll () {
        if (pageYOffset > 0) {
            document.querySelector('header').classList.add('header--mini');
        } else if (pageYOffset <= 100) {
            document.querySelector('header').classList.remove('header--mini');
        }
    }
    render () {
        return (
            <header className="header">
                <div className="header__wrapper">
                    <a className="header__logo" href="/">
                        <img src='../../img/logo.png' alt="Шашлычный мир"></img>
                    </a>
                    <nav className="header__navigation">
                        <ul className="navigation">
                            <li className="navigation__item">
                                <Link to="/about-cafe" className="navigation__link" data-link='#about' href='/'>О кафе</Link>
                            </li>
                            <li className="navigation__item">
                                <Link to="/menuOutSide" className="navigation__link" data-link='#menu-out-side'>Меню на вынос<br></br>Доставка</Link>
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
                                <Link to="/main-gallery" className="navigation__link" data-link='#gallery'>Галлерея</Link>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="/map" data-link='#map'>Посмотреть на карте</a>
                            </li>
                        </ul>
                        <div className="header__info">
                            <a className="phone" href="tel:88512999616">999-616</a>
                            <ul className="social">
                                <li className="social__item">
                                    <a className="social__link" href="">
                                        <img src='../../img/vk.png' alt="Мы во ВКонтакте"></img>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link" href="">
                                        <img src='../../img/inst.png' alt="Мы в Инстаграмме"></img>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <button className="header__nav-btn" type="button">
                        <svg className="ham hamRotate ham1" viewBox="0 0 100 100" width="50">
                            <path
                                className="line top"
                                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path
                                className="line middle"
                                d="m 30,50 h 40" />
                            <path
                                className="line bottom"
                                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;