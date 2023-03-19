const FiveHeads = () => {
    return (
        <div>
            <div className="Title">
                <h2>Lanzamiento de monedas <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/2-%20ReactJS/4-%20APIs/1-%20Five%20Heads/FiveHeads.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Tomar el código de ejemplo proporcionado y convertirlo en una Promesa.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core">
                    <iframe height="300" style={{width: "100%"}} scrolling="no" title="JavaScript QuickSort" src="https://codepen.io/Felipe-Tello/embed/RwYWvmb?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/Felipe-Tello/pen/RwYWvmb">
                    JavaScript QuickSort</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Toma la función fiveHeads y conviértela en una promesa.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Completa la función fiveHeads para que resuelva() cuando "heads" haya sido volteado cinco veces.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Permite que la función fiveHeads rechace() cuando la moneda se haya lanzado más de 100 veces.</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
      );
}
 
export default FiveHeads;