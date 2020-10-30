import React from 'react';


class Menu extends React.Component {
    render () {
        return (
            <section className="menu" id="menu">
                <div className="menu__wrapper">
                    <div className="menu__info">
                        <h2 className="menu__title">Ознакомьтесь с&nbsp;нашим меню</h2>
                        <p className="menu__text">
            Талантливые повара приготовят массу необычных блюд. А&nbsp;фирменная подача блюд покорит красотой самых искушенных ценителей.
                        </p>
                        <a className="menu__btn btn" href="">Посмотреть меню</a>
                    </div>
                    <div className="menu__back">
                        <div className="menu__list menu__carousel popup-gallery owl-carousel">
                            <a href="img/menu/bbq.jpg" title="Блюда на мангале">
                                <img src='../../../img/menu/bbq.jpg' alt="На мангале"></img>
                            </a>
                            <a href="img/menu/first.jpg" title="Первые блюда">
                                <img src='../../../img/menu/first.jpg' alt="Первые блюда"></img>
                            </a>
                            <a href="img/menu/second.jpg" title="Вторые блюда">
                                <img src='../../../img/menu/second.jpg' alt="Вторые блюда"></img>
                            </a>
                            <a href="img/menu/salad.jpg" title="Салаты">
                                <img src='../../../img/menu/salad.jpg' alt="Салаты"></img>
                            </a>
                            <a href="img/menu/garnir.jpg" title="Гарниры">
                                <img src='../../../img/menu/garnir.jpg' alt="Гарниры"></img>
                            </a>
                            <a href="img/menu/snacks.jpg" title="Закуски">
                                <img src='../../../img/menu/snacks.jpg' alt="Закуски"></img>
                            </a>
                            <a href="img/menu/drink.jpg" title="Напитки">
                                <img src='../../../img/menu/drink.jpg' alt="Напитки"></img>
                            </a>
                            <a href="img/menu/beer.jpg" title="Пивная карта">
                                <img src='../../../img/menu/beer.jpg' alt="Пивная карта"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Menu;