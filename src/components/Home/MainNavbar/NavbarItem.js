import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {select} from 'actions/selectPages';
import style from './MainNavbar.css';

const bsCols = (cols) => ("col-xs-" + cols + " cols-sm-" + cols + " col-md-" + cols + " col-lg-" + cols);


class MobileNavbarItem extends Component {
    constructor(props) {
        super(props)
        
    }
   
    
    render() {
        const {
            action,
            index,
            name,
            id,
            imgObj,
            imgActive,
            title,
            url,
            getId,
            active
        } = this.props
       
        return (
            <div>
            <NavLink
            to={url}
            id={name + "-link-" + id}
            onClick={() => this.props.select(name)}
            activeClassName="selected"
            >
            <div id={name + "-" + id} className={bsCols(3)}>

                <img src={ name===this.props.selectPages.selectPage? imgActive: imgObj} className={style.navbar_icon} alt={name}/>
                <p className={style.navbar_title}>{title}</p>

            </div>
            
        </NavLink>
    
        </div>
        )
    }
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





export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbarItem)