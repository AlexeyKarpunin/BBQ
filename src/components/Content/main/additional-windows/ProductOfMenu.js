import React from 'react';
import PropTypes from 'prop-types';

class ProductOfMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            products: props.products, // this array with object
        };

        this.unpack - this.unpack.bind(this);
    }

    unpack (productArray) {
        return productArray.map((product, index) => {
            return (
                <div className="additional__menu__grid__box" key={index}>
                    <img className="additional__menu__grid__img" src={product.imgLink}></img>
                    <div className="additional__menu__grid__container">
                        <span className="additional__menu__grid__name" >{product.name}</span>
                        <div className="additional__menu__grid__description">{product.description}</div>
                        <span className="additional__menu__grid__description__dose" >Порция: {product.dose} {product.calculation} / {product.price} <span className="additional__menu__grid__price">руб</span> </span>
                        <a className="menu__btn btn additional__menu__grid__btn">Заказать</a>
                    </div>
                </div>
            );
        });
    }

    render () {
        const {header, products} = this.state;
        const {unpack} = this;
        return (
            <div className="additional__menu__grid">
                <h1 className="additional__menu__grid__header">{header}</h1>
                <div className="additional__menu__grid__items">
                    {unpack(products)}
                </div>
            </div>
        );
    }
}

ProductOfMenu.propTypes = {
    header: PropTypes.string,
    products: PropTypes.array
};

export default ProductOfMenu;

