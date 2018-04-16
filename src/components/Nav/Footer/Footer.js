

import React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {select} from 'actions/selectPages';


import parenting_svg from './img/Buttom_Parenting_footer.svg';
import doctor_svg from './img/Buttom_Doctor_footer.svg';
import entertainment_svg from './img/Buttom_Entertainment_footer.svg';
import life_svg from './img/Buttom_Life_footer.svg';

import desktop_svg from './img/Buttom_Parenting.svg';
import about_svg from './img/Icon_About.svg';
import mobile_svg from './img/Group.svg';

import style from './Footer.css';


const bsCols = (cols)=> ("col-xs-"+cols+" cols-sm-"+cols+" col-md-"+cols+" col-lg-"+cols);
const bsOffsets =(cols)=>("col-xs-offset-"+cols+" col-sm-offset-"+cols+" col-md-offset-"+cols+" col-lg-offset-"+cols);

class Footer extends Component{
    constructor(props) {
        super(props)
       
    }

    renderNavItem(item,length,index){
        const {name,id,img,title,url} =item
        return (
            
            <NavLink onClick={()=>this.props.select(name)} key={index} to={url} className={ bsCols(3)+" "+style.footer_link}  id={"footer-"+name} >
                <p  >{title}</p>
            </NavLink>
        )
    }
    
    render(){
        const navItems = [
            { name:'parenting', id:0, imgActive: ""  , img:    parenting_svg, title: "亲子", url:  "/parenting/pedia/0"}, 
            { name:'doctor', id:1, imgActive: ""  , img:    doctor_svg, title: '医疗', url: "/doctor/pediatric"}, 
            { name:'entertainment', id:2, imgActive: ""  , img:    entertainment_svg, title: '娱乐', url:  "/entertainment/onlinegame"}, 
            { name:'life', id:3, imgActive: ""  , img:    life_svg, title: '生活', url: "/life" }
          ]
        const dateObj = new Date();
        console.log(dateObj);
    return (
        <div className={style.footer+" clearfix"}  id="footer" >
             © {dateObj.toDateString()}  Zach Yu All Rights Reserved.
        </div>

    )}
}


const mapStateToProps = (state, ownProps) => {
 
    return {
       
        selectPages:state.selectPages
    }
}
const mapDispatchToProps =  (dispatch) =>{
    return {
        select: (data) => {
            dispatch(select(data))
        }
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Footer)


