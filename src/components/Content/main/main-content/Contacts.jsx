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
                                <a className="contacts__phone phone__img" href="tel:89275555828">77-30-77</a> <br></br>
                               
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">Татищева, 43а</p>
                                <a className="contacts__phone phone__img" href="tel:89275699696">99-96-96</a> <br></br>
                              
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">с. Осыпной Бугор Астраханская 51и/1</p>
                                <a className="contacts__phone phone__img" href="tel:89512758758">758-758</a>
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