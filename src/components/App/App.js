import React, {Component} from 'react';

import NavigationBar from 'components/Nav/NavigationBar/NavigationBar';

import Footer from 'components/Nav/Footer/Footer';

import getRouter from 'router/router';

export default class App extends Component {
    constructor(props) {
        super(props)
        
    }
    
    render() {
     
        return (
            <div>
                <NavigationBar />
                {getRouter()}
                <Footer />
            </div>
               
        )
    }
}