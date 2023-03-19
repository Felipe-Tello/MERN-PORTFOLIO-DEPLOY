import React, { useEffect, useState } from 'react';

const PrimerReact = () => {

    const [text, setText] = useState("First React page redering...");

    useEffect(() => {
        setTimeout(() => {
            setText("Our First React page has rendered");
        }, 500);
    }, []);

    return (
        <div>
            <div className="Title">
                <h2>Primer React <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/2-%20ReactJS/1-%20Intro%20to%20react/1-%20First%20react/FirstReact.html"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Crear la primera pagina con React a travez de una etiqueta &lt;script&gt; insertada en nuestro documento HTML</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className='bgn-primary' style={{border:"2px solid black", display:"flex", alignItems:"center", width:"35vw", height:"30vh", padding:"1%", borderRadius:"10px", justifyContent:"center"}}>
                        <h1>{text}</h1>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea tu primera aplicación React</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
};

export default PrimerReact;
