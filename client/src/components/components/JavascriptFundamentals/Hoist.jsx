const Hoist = () => {
    return (
        <div>
            <div className="Title">
                <h2>Hoist de JavaScript <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/1-%20Fundamentals/1-%20Hoist.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>El objetivo de la practica es leer el codigo de JavaScript de la misma manera como el intérprete lo lee. Teniendo que escribir y predicir el resultado considerando las reglas de elevancion de Javascript.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <iframe height="400" style={{width: "100%"}} scrolling="no" title="JavaScript HoistJavaScript" src="https://codepen.io/Felipe-Tello/embed/ZEMGVxW?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                See the Pen <a href="https://codepen.io/Felipe-Tello/pen/ZEMGVxW">
                JavaScript HoistJavaScript</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                on <a href="https://codepen.io">CodePen</a>.
                </iframe>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Reescribe el código dado como lo ve el intérprete.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Predecir las salidas.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Ejecuta el código original y compara las salidas con tus predicciones.</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default Hoist;