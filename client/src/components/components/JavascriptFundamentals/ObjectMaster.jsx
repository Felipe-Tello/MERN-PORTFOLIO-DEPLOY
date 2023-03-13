const ObjectMaster = () => {
    return (
        <div>
            <div className="Title">
                <h2>Maestro de objetos <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/3-%20Functional%20Programming/ObjectMaster.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>Usar las funciones map y filter para obtener algunos datos de una matriz inmutable de Pokémon.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <iframe height="408" style={{width: "100%"}} scrolling="no" title="JavaScript ObjectMaster" src="https://codepen.io/Felipe-Tello/embed/YzOPQoe?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                See the Pen <a href="https://codepen.io/Felipe-Tello/pen/YzOPQoe">
                JavaScript ObjectMaster</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                on <a href="https://codepen.io">CodePen</a>.
                </iframe>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Una serie de objetos Pokémon donde la identificación es divisible por 3</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">una serie de objetos Pokémon que son del tipo "fuego"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Una variedad de objetos Pokémon que tienen más de un tipo</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">una matriz con solo los nombres de los Pokémon</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Una matriz con solo los nombres de Pokémon con una identificación mayor que 99</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">una matriz con solo los nombres del pokémon cuyo único tipo es veneno</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">un recuento de la cantidad de pokémon que son de tipo "normal"</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default ObjectMaster;