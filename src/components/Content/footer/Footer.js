import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <img src="../../img/logo.png" alt=""></img>
                    <ul className="navigation navigation--footer">
                        <li className="navigation__item">
                            <a className="navigation__link" href="">О кафе</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="">Доставка</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="">Меню</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="">Галлерея</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="">Посмотреть на карте</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;