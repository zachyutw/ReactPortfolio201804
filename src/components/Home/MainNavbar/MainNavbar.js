import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import NavbarItem from './NavbarItem';
import {select} from 'actions/selectPages';
import {selectParams} from 'actions/pArticles';


import img_0_click   from './img/MainIcon/Buttom_Parenting_Click@2x.svg';
import img_0_unclick from './img/MainIcon/Buttom_Parenting_UnClick@2x.svg';
import img_1_click   from './img/MainIcon/Buttom_Doctor_Click@2x.svg';
import img_1_unclick from './img/MainIcon/Buttom_Doctor_UnClick@2x.svg';
import img_2_click   from './img/MainIcon/Buttom_Entertainment_Click@2x.svg';
import img_2_unclick from './img/MainIcon/Buttom_Entertainment_UnClick@2x.svg';
import img_3_click   from './img/MainIcon/Buttom_Life_Click@2x.svg';
import img_3_unclick from './img/MainIcon/Buttom_Life_UnClick@2x.svg';

// import img_0_click from './img/img_0_click.svg';
// import img_0_unclick from './img/img_0_unclick.svg';
// import img_1_click from './img/img_1_click.svg';
// import img_1_unclick from './img/img_1_unclick.svg';
// import img_2_click from './img/img_2_click.svg';
// import img_2_unclick from './img/img_2_unclick.svg';
// import img_3_click from './img/img_3_click.svg';
// import img_3_unclick from './img/img_3_unclick.svg';

import style from './MainNavbar.css';

const bsCols = (cols) => ("col-xs-" + cols + " cols-sm-" + cols + " col-md-" + cols + " col-lg-" + cols);
const bsOffsets = (cols) => ("col-xs-offset-" + cols + " col-sm-offset-" + cols + " col-md-offset-" + cols + " col-lg-offset-" + cols);

const BackgroundColor = "#FAFAFA"

class MobileMainNavbar extends Component {

    constructor(props) {
        super(props)
 
    }

    render() {
        const navItems = [
            { name: 'parenting',     id: 0, imgActive: img_0_click, imgObj: img_0_unclick, title: "亲子", url: "/parenting/pedia/0" }, 
            { name: 'doctor',        id: 1, imgActive: img_1_click, imgObj: img_1_unclick, title: '医疗', url: "/doctor/pediatric"            }, 
            { name: 'entertainment', id: 2, imgActive: img_2_click, imgObj: img_2_unclick, title: '娱乐', url: "/entertainment/onlinegame"     }, 
            { name: 'life',          id: 3, imgActive: img_3_click, imgObj: img_3_unclick, title: '生活', url: "/life"              }
        ]
       
        return (
           
            <div id="main-navbar" style={this.props.displayPage.display? {display:'block'} : {display:'none'}}>
               
                <div className={style.navbar}>

                    <NavbarItem index={0} onClick={this.props.selectParams(1,null,null,null)} {...navItems[0]} />
                    <NavbarItem index={1}  {...navItems[1]} />
                    <NavbarItem index={2}  {...navItems[2]} />
                    <NavbarItem index={3}  {...navItems[3]} />
                 
                </div> 
                    
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  
    return {
        displayPage:state.displayPage,
        selectPages:state.selectPages
    }
}


const mapDispatchToProps =  (dispatch) =>{
    return {
        selectParams: (c1,c2,cursor,t) => {
            dispatch(selectParams(c1,c2,cursor,t))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileMainNavbar);

