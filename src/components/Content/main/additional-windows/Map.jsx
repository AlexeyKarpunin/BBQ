import React from 'react';

class Map extends React.Component {

    componentDidMount() {
        const header = document.querySelector('.header');
        header.classList.add('additional__menu__black__ground');
       
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        header.classList.remove('additional__menu__black__ground');
    }
    render() {
        return(
            <div className="map" id="map"></div>
        );
    }
}

export default Map;