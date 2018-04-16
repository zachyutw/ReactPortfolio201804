import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import logo from       './img/LOGO_small@2x.svg';
import search_svg from './img/Icon_Search.svg';
import user_icon from  './img/Icon_Profile.svg';


import style from './TopNavbar.css';
const bsCols = (cols) => ("col-xs-" + cols + " cols-sm-" + cols + " col-md-" + cols + " col-lg-" + cols);
const TopNavbar = () => {
    return (
      <nav className={style.top_navbar} id="top-navbar">
          <div className={bsCols(3)+" "+style.top_navlogo} >
            <Link  to="/"><img className={style.top_navlogo_img} src={logo} alt="logo"   id="logo"/></Link>
          </div>
          <div className={bsCols(7)+" "+style.top_nav_search}  >
          <Link to="/searching" > 
              <div className={style.searchBar}>
                <div className={style.searchImg} >
                  <img className={style.img} src={search_svg} alt="search_bar"  />
                </div>       
              </div>
            </Link>
          </div>
          <div className={bsCols(2)+" "+style.profile}>
            <Link  to="/profile">
              <img className={style.img} src={user_icon} alt="users_account" id="users_account" />
            </Link>
          </div>
       
      </nav>
    )
  }
  
 

  export default TopNavbar