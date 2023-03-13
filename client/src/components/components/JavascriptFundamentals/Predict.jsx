const Predict = () => {
    return (
        <div>
            <div className="Title">
                <h2>Predecir la desestructuración <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/1-%20Fundamentals/2-%20PredictDestructuring.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>Predecir la salida para los cinco bloques de código, Si en una línea de código ocurre un error, indicar el error.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <iframe height="400" style={{width: "100%"}} scrolling="no" title="JavaScript PredictDestructuring" src="https://codepen.io/Felipe-Tello/embed/xxaGMOj?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                See the Pen <a href="https://codepen.io/Felipe-Tello/pen/xxaGMOj">
                JavaScript PredictDestructuring</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                on <a href="https://codepen.io">CodePen</a>.
                </iframe>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Predecir la salida para el problema 1</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Predecir la salida para el problema 2</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Predecir la salida para el problema 3</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Predecir la salida para el problema 4</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Predecir la salida para el problema 5</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default Predict;