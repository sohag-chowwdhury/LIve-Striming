import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
   return(
       <div className="ui secondary pointing menu">
           <Link to="/" className="item">
                stremy
           </Link>
            <div className="right menu">
                <Link to="/" className="item">
                All Strem
                
                </Link>
            </div>
       </div>
   )
}

export default Header;