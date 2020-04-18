import React from 'react';
import "../styles/Information.css";

import imagen from "../images/hojadevida.jpg";

class Information extends React.Component{
    render(){
        return <div className = "info">
            <h1>MARÍA CAMILA VILLAMIZAR HERNÁNDEZ</h1>
            <img src={imagen}/>
            <p>
                Celular: +(57)3177925197 - Fijo: 6904542<br/>
                Email: camiilavillamizar@gmail.com<br/>
                Dirección: Manga, calle real N. 23-66, Cartagena, Colombia<br/>
            </p>
        </div>
    }
}

export default Information; 