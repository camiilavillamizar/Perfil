import React from 'react';
import Particles from 'react-particles-js';
import Information from './Information';
import Columns from './Columns';

import "../styles/principal.css"



function Principal() {
    return(
        <div className = "container">
            <Information/>
            <Columns/>
        </div>
    )

}

export default Principal;
