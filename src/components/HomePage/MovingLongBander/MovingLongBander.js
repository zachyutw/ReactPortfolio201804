import React, { Component } from 'react'
import {Popover,OverlayTrigger} from 'react-bootstrap';

import longBander_jpg from './img/taiwan-654398_1920.jpg';
import s from './MovingLongBander.css';

class MovingLongBander extends Component {
    constructor(props) {
        super(props)
        this.state={
            x:0,
            max_x:-68,
            moving_x:-1,
            multi:10,
            unit:'vw'
          
        }
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
        
    }
    componentWillMount(){
        let intervalId =  setInterval(this.handleMoveImgX.bind(this), 100);
         this.setState({intervalId: intervalId});
         this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentDidMount(){

        console.log(this.state.width);
        if(this.state.width > 1500){
            this.setState({multi:10});
            this.setState({max_x:-24});
        }
        else if(this.state.width > 1000){
            this.setState({multi:10});
            this.setState({max_x:-60});
        }
        else if(this.state.width > 600){
            this.setState({multi:10});
            this.setState({max_x:-100});
        }
        else if(this.state.width > 350){
            this.setState({multi:4});
            this.setState({max_x:-140});
        }
    }
    handleMoveImgX(){
        this.setState( {x:this.state.x+this.state.moving_x });
        if(this.state.x <= this.state.max_x* 10){
            this.setState({moving_x:this.state.moving_x*(-1)})
        }
        if(this.state.x >=0){
            this.setState({moving_x:this.state.moving_x*(-1)})
        }
        
        
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    componentWillUnmount(){
         clearInterval(this.state.intervalId);
         window.removeEventListener('resize', this.updateWindowDimensions);
    }
    handleOnMouseEnter(){
        clearInterval(this.state.intervalId);
    }
    handleOnMouseLeave(){
        let intervalId =  setInterval(this.handleMoveImgX.bind(this), 100);
        this.setState({intervalId: intervalId});
    }
 
    
    render() {
        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title="Google Map">
              <strong>Let Google Map Gouild you</strong>
            </Popover>
          );
        
        return (
            <div className={s.longbander} 
                onMouseEnter={this.handleOnMouseEnter} 
                onMouseLeave={this.handleOnMouseLeave} 
                style={{background:`url(${longBander_jpg}) ${(this.state.x/this.state.multi).toFixed(1)}vw -5vw`}}>
                {"  "}
                <div className={s.content}>
                   <a href="https://eng.taiwan.net.tw/">
                    Jiufen from Taiwan </a><br/> 
                    <a href="https://www.google.ca/maps/place/Jioufen,+224,+Taiwan/@25.1087055,121.8411861,16z/data=
                            !3m1!4b1!4m5!3m4!1s0x345d451805536779:0x29b83a838c953b84!8m2!3d25.109187!4d121.8462979">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverHoverFocus}>
                        <i className="far fa-map"></i> 
                    </OverlayTrigger>
                    </a>
                </div>
            </div>
        )
    }
}

export default MovingLongBander;