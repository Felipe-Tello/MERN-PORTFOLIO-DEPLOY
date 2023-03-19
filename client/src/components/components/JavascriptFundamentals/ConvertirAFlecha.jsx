import { useState } from 'react';

const ConvertirAFlecha = () => {
    const [inputValue, setInputValue] = useState('');
    const [color, setColor] = useState("");

    const setBackgroundColorById = (id, color) => {
        document.getElementById(id).style = "background-color: " + color;
    };

    const handleClick = () => {
        setBackgroundColorById("paragraph", "blue");
    };

    const handleAlert = () => {
        alert(inputValue);
    };

    const handleHoverIn = () => {
        setBackgroundColorById("hover-this", "green");
    };

    const handleHoverOut = () => {
        setBackgroundColorById("hover-this", "#282c34");
    };

    
    const handleHoverIn2 = () => {
        setBackgroundColorById("bgcolor", color);
    };

    const handleHoverOut2 = () => {
        setBackgroundColorById("bgcolor", "#282c34");
    };

    return (
        <div>
            <div className="Title">
                <h2>Convertir a flecha <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/1-%20Fundamentals/3-%20ConvertirAFlecha.html"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>La tarea es para actualizar el Javascript en su sitio a ES6, de modo que cada funcion clásica se actualize a funciones de tipo flecha.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className='bgn-primary' style={{width:"80%", border:"2px black solid", borderRadius:"10px", padding:"5%"}}>
                        <h1>My Boring Website</h1>
                        <p id="paragraph">
                            This website is boring, with very little CSS.
                            However, we really just care about the javascript.
                            For example, if you click <button id="button" onClick={handleClick}>this button</button>, the background of this paragraph tag
                            will change to blue.
                        </p>
                        <p>We also have a <button id="alert" onClick={handleAlert}>alert</button> button that will grab the text from the input below and show it in a popup.</p>
                        <div>
                            <input type="text" id="popup-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        </div>
                        <p>We just like random interactivity in the site, including a fun effect if you hover over <span id="hover-this" onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}><b>this.</b></span></p>
                        <label htmlFor="color">
                            <p id="bgcolor" onMouseOver={handleHoverIn2} onMouseOut={handleHoverOut2}>
                                Another task: This should be another feature.
                                I want to click anywhere in this paragraph tag and I want to be able to change the background color to
                                whatever is in this input: <input type="text" id='color' value={color} onChange={(e) => setColor(e.target.value)} />
                            </p>
                        </label>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Actualiza todos los métodos para convertirse en funciones de flecha</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
};

export default ConvertirAFlecha;
