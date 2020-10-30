import React from 'react';


class Banner extends React.Component {
    render () {
        return (
            <section className="banner">
                <ul className="banner__carousel owl-carousel">
                    <li className="banner__item">
                        <div className="banner__content">
                            <h2 className="banner__title">
                  У Вас скоро <br></br>
                                <span className="red">День рождения?!</span>
                  Отпразднуйте его в&nbsp;сети&nbsp;кафе <br></br>
                                <span className="red">«Шашлычный мир»!</span>
                            </h2>
                            <p className="banner__text">Получите скидку 15%, возможность принести алкоголь с&nbsp;собой и&nbsp;подарок от&nbsp;заведения.</p>
                        </div>
                    </li>
                    <li className="banner__item banner__item--2">
                        <div className="banner__content">
                            <h2 className="banner__title">Доставка, вынос в течении <span className="red">1 часа!</span></h2>
                            <p className="banner__text">Закажите у нас и получите подарок на выбор:</p>
                            <ul>
                                <li>Бесплатная доставка</li>
                                <li>Лимонад или Кока-Кола</li>
                                <li>Соус на выбор</li>
                                <li>Картофель фри</li>
                            </ul>
                        </div>
                    </li>
                    <li className="banner__item banner__item--3">
                        <div className="banner__content">
                            <h2 className="banner__title">
                                <span className="red">У нас 4 VIP комнаты</span><br></br>
                  с караоке вместимость до&nbsp;16&nbsp;человек
                            </h2>
                        </div>
                    </li>
                    <li className="banner__item banner__item--4">
                        <div className="banner__content">
                            <h2 className="banner__title">
                                <span className="red">Голодны!</span><br></br>
                  Мы вас накормим!<br></br>
                                <span className="red">Хотите пить?</span><br></br>
                  Мы дадим вам напиться!<br></br>
                                <span className="red">Одиноки?</span>
                  Мы вас напоим!
                            </h2>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Banner;