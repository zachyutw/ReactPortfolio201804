import React, {Component} from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Popover,OverlayTrigger,ProgressBar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


import IntroBander from 'components/HomePage/IntroBander/IntroBander';
import MovingLongBander from 'components/HomePage/MovingLongBander/MovingLongBander';
import NavigationBar from 'components/Nav/NavigationBar/NavigationBar';

import longBander_jpg from './img/taiwan-654398_1920.jpg';
import s from './HomePage.css';

const bsCols = (cols) => ("col-xs-" + cols + " cols-sm-" + cols + " col-md-" + cols + " col-lg-" + cols);
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        
        this.handleScroll = this.handleScroll.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleSkillWheel = this.handleSkillWheel.bind(this)
        
        
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
       // console.log(window.outerHeight);
        console.log(document.body.offsetHeight);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        const totalHeight = document.body.scrollHeight;
        const scrollHeight = window.scrollY+window.innerHeight;
        if(window.scrollY<=0){
            console.log("Page top");
        }
        if(scrollHeight >= totalHeight){
            console.log("Page button");
        }
      };
    handleWheel(event) {
        if (event.nativeEvent.wheelDelta > 0) {
            console.log('scroll up');
        } else {
            console.log('scroll down');
        }
    }
    handleSkillWheel(event) {
        if (event.nativeEvent.wheelDelta > 0) {
            console.log('skill scroll up');
        } else {
            console.log('skill scroll down');
        }
    }
    render() {
        return (
            <div onWheel={this.handleWheel }>
             
                <IntroBander />
                <MovingLongBander />
                <div onWheel={this.handleSkillWheel}>
                <IntroductionContainer />
                </div>
                <ServicesContainer />
                <SkillsContainer />
                
            </div>
        )
    }
}

class SkillsContainer extends Component {

    constructor(props) {
        super(props)
        this.state={
            width:0,
        }
        
    }
    

    renderItem(item,index){
        return <li key={index} className={s.listGroup_item+" list-group-item clearfix"}>
            <div className={s.listGroup_item_left}>{item.name}</div>
            <div className={s.listGroup_item_right}> 
                <div className={s.percentage_label}>{item.percentage}</div> 
                    <div className={s.percentage_bar}>
                        <div className={s.progress_bar} style={{width:`calc(${item.percentage}%)`,maxWidth:'90%'}}></div> 
                    </div>
                </div>
        </li>
    }
    render() {
        const feSkills=[
            {name:"javascript",percentage:70},
            {name:"react",percentage:85},
            {name:"redux",percentage:70},
            {name:"css-module",percentage:60},
            {name:"webpack",percentage:50},
            {name:"css",percentage:75},
            {name:"html",percentage:70}
        ]
        const beSkills=[
            {name:"nodejs",percentage:75},
            {name:"php",percentage:60},
            {name:"java",percentage:60},
            {name:"c#",percentage:60},
            {name:"python",percentage:50},
            {name:"express",percentage:60},
            {name:"laravel",percentage:60},
            {name:"asp.net core",percentage:60},
        ]

        return (
            <div className={s.skills+" clearfix"}>
                <div className={s.skills_container+" clearfix"}>
               <h3><b>Skills</b></h3>
                <div className={s.feSkills+" col-xs-12 col-sm-12 col-md-6 col-lg-6"}>
                <div className={s.title}>Front End</div>
                    <ul className={s.feSkills_listGroup+" list-group clearfix"}>
                        {feSkills.map( (item,index)=>this.renderItem(item,index) )}
                    </ul>
                </div>
             
                <div className={s.beSkills+" col-xs-12 col-sm-12 col-md-6 col-lg-6"}>
                <div className={s.title}>Back End</div>
                    <ul className={s.beSkills_listGroup+" list-group"}>
                    {beSkills.map( (item,index)=>this.renderItem(item,index) )}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

class ServicesContainer extends Component {
    render() {
        return (
            <div className={s.services+" clearfix"}>
                <div className={s.services_container+" clearfix"}>
                 <h3><b>Services</b></h3>
                <div className={s.icon_container+" col-xs-12 col-sm-12 col-md-4 col-lg-4"}><i className={s.icon+" fas fa-diagnoses"}></i></div>
                <div className={s.icon_container+" col-xs-12 col-sm-12 col-md-4 col-lg-4"}><i className={s.icon+" fas fa-beer"}></i></div>
                <div className={s.icon_container+" col-xs-12 col-sm-12 col-md-4 col-lg-4"}><i className={s.icon+" fab fa-black-tie"}></i></div>
                </div>
            </div>
        )
    }
}




class IntroductionContainer extends Component {
    render() {
        return (
            <div className={s.introduction}>
                <div className={s.introductionContainer}>
                <h3><b>Introduction</b></h3>
                <p> I am a fresh Web app developer in the town. I can build a high efficient, stable, react app for the clients. 
                    Always keep a positive and happy face <i className="far fa-smile"></i> in everyday Codign life.
                </p>

                <p>
                Currently, I am in the Vancouver, look for an new opportunity to build some awesome apps with awesome people. 
                </p>
                <p>
                Contact me, when need a guy to make an great app together.
                </p>
                </div>
            </div>
        )
    }
}



class AboutContainer extends Component {
    render() {
        return (
            <div className={s.aboutContainer+" container"}>
            <p>I currently am working at ReactJS with Redux, CodeSplitting Redux Thunk and CSS module. 
            Even if my website looks good, and I style my website 100%. 
            However, I am not a web designer, I am a great web app deveopler. I have the ability to realize the fancies of web designers.
            I started making react apps since Nov 2017, and after few monthes, 
            I can provide stable, efficient, fast and original web app as what client want. 
            </p>

            <p>
            In addition to React development, I studied some back-end platforms after work. Such as ExpressJS with MongoDB, Larvarel with MySQL, 
            ASP.net core with MSSQL.
            It is interesting to see the diffenence when I play with different back-end platforms. 
             </p>

            <p>
            Currently, I am in the Vancouver, look for an new opportunity to build some awesome apps with awesome people.
            </p>

            
        </div>
        )
    }
}

