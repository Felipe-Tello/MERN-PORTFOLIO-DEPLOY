const SuperNinja = () => {
    return (
        <div>
            <div className="Title">
                <h2>Super Ninja <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/2-%20OOP/2-%20SuperNinja.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>Aplicar mas propiedades de la programacion orientada a objetos como lo es la herencia</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core">
                    <iframe height="440" style={{width: "100%"}} scrolling="no" title="JavaScript SuperNinja" src="https://codepen.io/Felipe-Tello/embed/wvEaByL?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/Felipe-Tello/pen/wvEaByL">
                    JavaScript SuperNinja</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">crear una clase Sensei que hereda de la clase Ninja</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agregar un atributo: sabiduría - predeterminado a 10</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">crear un método: speakWisdom()</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">crear un método: drinkSake()</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default SuperNinja;