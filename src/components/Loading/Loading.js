import React, {Component} from 'react';

import style from './Loading.css';
import loading_gif from './img/loading_12.gif';
export default class Loading extends Component {
    render() {
        return (
            <div>
                <div className={style.loading_container}>
                    <img className={style.loading_img} src={loading_gif} alt="loading" />
                <p>page loading...</p>
                </div>
                <div className={style.blur_container}>
                </div>
            </div>
        )
    }
}