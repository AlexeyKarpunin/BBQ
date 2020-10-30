
import React from 'react';
import Header from './Content/header/Header';
import Main from './Content/main/Main';
import Footer from './Content/footer/Footer';
import MenuList from './Content/main/additional-windows/MenuList';
import {contentNames} from './enums';


const {menuList, defaultPage} = contentNames;

const DEFAULT_STATE = {
    contentNow: defaultPage,
};

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = DEFAULT_STATE;
        this.changeMainContent = this.changeMainContent.bind(this);
        this.showMainContent = this.showMainContent.bind(this);
    }

    showMainContent () {
        const {contentNow} = this.state;
        const {changeMainContent} = this;

        switch (contentNow) {
        case menuList:
            return <MenuList />;
        default:
            return <MenuList />; //<Main {...{changeContent: changeMainContent }} />;
        }
    }

    changeMainContent (newContent) {
        this.setState({contentNow: newContent});
    }

    render () {
        const {showMainContent} = this;
        return (
            <section className="body">
                <Header />
                {showMainContent()}
                <Footer />
            </section>
        );
    }
}

export default App;
