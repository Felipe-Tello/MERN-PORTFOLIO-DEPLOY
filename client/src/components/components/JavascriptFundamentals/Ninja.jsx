const Ninja = () => {
    return (
        <div>
            <div className="Title">
                <h2>Ninja <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/2-%20OOP/1-%20Ninja.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>Aplicar las propiedades de la programacion orientada a objetos</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <iframe height="430" style={{width: "100%"}} scrolling="no" title="JavaScript Ninja" src="https://codepen.io/Felipe-Tello/embed/MWqYExP?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                See the Pen <a href="https://codepen.io/Felipe-Tello/pen/MWqYExP">
                JavaScript Ninja</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                on <a href="https://codepen.io">CodePen</a>.
                </iframe>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea una clase Ninja</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agregar un atributo: nombre</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agregar un atributo: salud</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agrega un atributo: velocidad - da un valor predeterminado de 3</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agrega un atributo: fuerza - da un valor predeterminado de 3</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agrega un método: sayName() - Esto debería registrar el nombre de Ninja en la consola</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agrega un método: showStats() - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">agrega un método: drinkSake() - Esto debería agregar +10 de salud al Ninja</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default Ninja;