import React from 'react';
import "../styles/Columns.css";

class Columns extends React.Component{
    render(){
        return <div className = "columns">
           <div className = "column">
           <h1>PERFIL PROFESIONAL</h1>
                <p>
                Estudiante de Ingeniería de Sistemas de cuarto año en la Universidad
                 Tecnológica de Bolívar. He desarrollado conocimientos de ciencias básicas, 
                 programación informática, manejo de herramientas de oficina y dominio del 
                 idioma inglés. Con experiencia en monitoría de fundamentos de programación.<br/>
                 Poseo aptitudes de investigación, con principios éticos e idóneos, en busca de 
                 aplicar los conocimientos para apoyar la innovación y el crecimiento 
                 organizacional.
                </p>
           </div>
           <div className = "column">
                <h5>EXPERIENCIA LABORAL</h5>
                <p>
                <li>Universidad Tecnológica de Bolívar</li>
                Monitora de Fundamentos de Programación Febrero 2019- Actualmente
                </p>
                <h5>FORMACIÓN ACADÉMICA</h5>
                <p>
                    <li>Universidad Tecnológica de Bolívar</li>
                    2017 – Actualmente (Séptimo semestre) Cartagena 
                    <li>Gimnasio Bilingüe Altamar</li>
                    2016- Cartagena
                </p>
                <h5>ESTUDIOS COMPLEMENTARIOS</h5>
                <p>
                <li>Curso Taller Django</li>
                Tecnológico Comfenalco 2019</p>
           </div>
        </div>
    }
}

export default Columns;