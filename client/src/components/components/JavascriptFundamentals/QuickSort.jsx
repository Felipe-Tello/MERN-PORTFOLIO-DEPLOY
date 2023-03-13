const QuickSort = () => {
    return (
        <div>
            <div className="Title">
                <h2>Ordenamiento Rápido <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/1-%20Fundamentals/5-%20OrdenamientoRapido.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>Implementar quicksort utilizando la partición de Hoare.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <iframe height="180" style={{width: "100%"}} scrolling="no" title="JavaScript QuickSort" src="https://codepen.io/Felipe-Tello/embed/wvEaZYb?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                See the Pen <a href="https://codepen.io/Felipe-Tello/pen/wvEaZYb">
                JavaScript QuickSort</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                on <a href="https://codepen.io">CodePen</a>.
                </iframe>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonus 1: ¿Por qué no elegir un pivote fácil, como el valor más a la izquierda?, Diagrama esto y determina por qué?</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonus 2: ¿Cuál es la complejidad del tiempo Big O de este algoritmo?</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonus 3: ¿Cuáles son las complejidades temporales de Big Omega(el mejor escenario) y Big Theta(el escenario promedio) de quicksort?</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default QuickSort;