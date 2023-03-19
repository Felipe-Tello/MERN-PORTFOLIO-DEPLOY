const TimeToDuel = () => {
    return (
        <div>
            <div className="Title">
                <h2>Es Hora de Duelo <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/1-%20Javascript%20Fundamentals/2-%20OOP/3-%20HoraDelDuelo.js"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>         
                <p>Diseñar un juego de cartas coleccionables con las propiedades de la programacion orientada a objetos</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core">
                    <iframe height="510" style={{width: "100%"}} scrolling="no" title="JavaScript TimeToDuel" src="https://codepen.io/Felipe-Tello/embed/jOvEwKR?default-tab=js%2Cresult&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/Felipe-Tello/pen/jOvEwKR">
                    JavaScript TimeToDuel</a> by Felipe Tello (<a href="https://codepen.io/Felipe-Tello">@Felipe-Tello</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">El jugador 1 convoca a "Ninja Cinturón Rojo"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">El jugador 2 convoca a "Ninja Cinturón Negro"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default TimeToDuel;