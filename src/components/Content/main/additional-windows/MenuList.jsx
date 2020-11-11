import React from 'react';
import ProductOfMenu from './ProductOfMenu.jsx';
import productsArray from './products/products';
import Basket from '../../header/Basket.jsx';

const DEFAULT_STATE = {
    index: 0,
    key: 2,
};


class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
        this.changeProductList = this.changeProductList.bind(this);
    }

    componentDidMount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        const mobileMenu = document.querySelector('.additional__menu__list');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        
        window.scrollTo(pageXOffset, 0);
        this.activationLink(navItemsArr);

        header.classList.add('additional__menu__black__ground');
        body.classList.add('additional__menu__container');

        mobileMenu.addEventListener('swiped-right', this.swipe);

        mobileMenu.addEventListener('click', this.click);
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);

        header.classList.remove('additional__menu__black__ground');
        body.classList.remove('additional__menu__container');

        document.removeEventListener('swiped-right', this.swipe);
        document.removeEventListener('click', this.click);
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#menu') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#menu') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    swipe() {
        window.scrollTo(pageXOffset, 0);
        document.querySelector('.additional__menu__navigation').classList.add('additional__menu__swipe_left');
        document.querySelector('.additional__menu__grid').classList.add('additional__menu__display_none');
    }

    click() {
        document.querySelector('.additional__menu__navigation').classList.remove('additional__menu__swipe_left');
        document.querySelector('.additional__menu__grid').classList.remove('additional__menu__display_none');
    }
    

    async changeProductList (e) {
        if (e.target.hasAttribute('index')) {
            window.scrollTo(pageXOffset, 0);
            const index = Number(e.target.getAttribute('index'));
            await this.setState({index: index}, this.setState({key: Math.random()}));
        }
    }

    render () {
        const {changeProductList} = this;
        const {index} = this.state;
        
        return (
            <main data-swipe-threshold="20" data-swipe-timeout="500" data-swipe-ignore="false" className="additional__menu__list">
                <nav className="additional__menu__navigation">
                    <h1 className="additional__menu__navigation__header">Наше Меню</h1>
                    <ul onClick={changeProductList} className="additional__menu__list__items">
                        <li index='1' className="additional__menu__list_item">Вторые блюда</li>
                        <li index='0' className="additional__menu__list_item">Первые блюда </li>
                        <li index='2' className="additional__menu__list_item">Напики</li>
                        <li index='3' className="additional__menu__list_item">Гарниры</li>
                        <li index='4' className="additional__menu__list_item">Салаты</li>
                        <li index='5' className="additional__menu__list_item">Пивная карта</li>
                        <li index='6' className="additional__menu__list_item">Закуски</li>
                        <li index='7' className="additional__menu__list_item">Блюда на мангале</li>
                    </ul>
                </nav>
                <Basket />
                <ProductOfMenu key={this.state.key} {...productsArray[index]} />
            </main>
        );
    }
}


export default MenuList;