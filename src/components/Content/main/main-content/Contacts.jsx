import React from 'react';

class Contacts extends React.Component {
    render() {
        return (
            <section className="contacts">
                <div className="contacts__info">
                    <div className="contacts__wrapper">
                        <h2 className="contacts__title">Мы ждем вас в&nbsp;гости!</h2>
                        <ul className="contacts__list">
                            <li className="contacts__item">
                                <p className="contacts__address">Куликова, 50в</p>
                                <a className="contacts__phone" href="tel:89275555828">+7 (927) 555 - 5828</a>
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">Татищева, 43й</p>
                                <a className="contacts__phone" href="tel:88512758758">+7 (8512) 758 - 758</a>
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">Астраханская 51и/1</p>
                                <a className="contacts__phone" href="tel:88512758758">+7 (8512) 758 - 758</a>
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

export default Contacts;