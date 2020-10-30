import React from 'react';
import ProductOfMenu from './ProductOfMenu';
import productsArray from './products';

const DEFAULT_STATE = {
    index: 0,
    key: 2,
};


class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
        this.changeProductList = this.changeProductList.bind(this);
        this.showProductComponent = this.showProductComponent.bind(this);
    }

    componentDidMount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        header.classList.add('additional__menu__black__ground');
        body.classList.add('additional__menu__container');
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        header.classList.remove('additional__menu__black__ground');
        body.classList.remove('additional__menu__container');
    }

    async changeProductList (e) {
        if (e.target.hasAttribute('index')) {
            window.scrollTo(pageXOffset, 0);
            const index = Number(e.target.getAttribute('index'));
            await this.setState({index: index}, this.setState({key: Math.random()}));

        }
    }


    showProductComponent (index) {
        return <ProductOfMenu {...productsArray[index]} />;
    }


    render () {
        const {showNow}= this.state;
        const {changeProductList, showProductComponent} = this;
        const {index} = this.state;
        
        return (
            <main className="additional__menu__list">
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
                <ProductOfMenu key={this.state.key} {...productsArray[index]} />
            </main>
        );
    }
}


export default MenuList;