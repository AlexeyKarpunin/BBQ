import React from 'react';
import SucsessWindow from './SucsessBasketWindow.jsx';
import OrderMenu from './OrderMenu.jsx';

const DEFAUL__STATE = {
    order: false,
};

class MainBasket extends React.Component {
    constructor (props) {
        super (props);
        this.state = DEFAUL__STATE;
        this.changeContent = this.changeContent.bind(this);
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

    changeContent () {
        this.setState({order: true});
    }

    render () {
        const {order} = this.state;
        if (order) {
            return <SucsessWindow />;
        } else {
            return <OrderMenu {...{
                orderClick: this.changeContent,
            }} />;
        }
    }
}

export default MainBasket;