const HowLong = () => {
    return (
        <div>
            <div className="Title">
                <h2>¿Cuánto tiempo tomó? <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/1-%20Fundamentals/4-%20CuantoTomo.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>Comparar la rapidez de ejecucion en las funciones, ver el tiempo que toman en ejecutarse y refactorizarlas para que sean mas eficientes con los recursos.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core">
                    <iframe height="400" style={{width: "100%"}} scrolling="no" title="JavaScript HowLong" src="https://codepen.io/Felipe-Tello/embed/zYJGbve?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/Felipe-Tello/pen/zYJGbve">
                    JavaScript HowLong</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Reescribe isPrime() para calcular primos más rápido</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Intenta calcular los números primos 100,000 y 1,000,000</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Determina si la función de Fibonacci iterativa o recursiva es más rápida</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Escribe una función más eficiente para invertir una cadena</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default HowLong;