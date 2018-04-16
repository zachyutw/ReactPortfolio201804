import React from 'react'

import s from './BrandIcon.css';
const BrandIcon = (props) => {
    const {styles,aw_icon,fn,ln} = props;
    let _icon = aw_icon || "fab fa-react";
    return (
        <div className={s.brand_outer_border}  >
                       
         {fn}<i className={_icon}></i>{ln}
    
        </div>
    )
}

export default BrandIcon;