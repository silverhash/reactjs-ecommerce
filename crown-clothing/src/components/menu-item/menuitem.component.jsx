import React from 'react';

import './menuitem.styles.scss';


const Menuitem = ({ title, imageUrl, size}) => (
    
    <div className={`menu-item ${size}`} >
        <div  style={{ backgroundImage: `url(${imageUrl})` }}  className="background-image"></div>
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        
);

export default Menuitem;