const PrimerReactConJSX = () => {
    return (  
        <div>
            <div className="Title">
                <h2>Primer React con JSX <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/1-%20Intro%20to%20react/2-%20First%20jsx/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Crear la primera pagina con React a travez de una etiqueta &lt;script&gt; insertada en nuestro documento HTML</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className="bgn-primary" style={{border:"2px solid black", display:"flex", flexDirection:"column", alignItems:"center", width:"fit-content", height:"fit-content", padding:"3%", margin:"1% 0 1% 0", borderRadius:"5%"}}>
                        <h2>Hello Dojo!</h2>
                        <h4>Things I need to do:</h4>
                        <ul>
                            <li>Learn React</li>
                            <li>Climb Mt.Everest</li>
                            <li>Run a marathon</li>
                            <li>Feed the dogs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crear una aplicación create-react-app</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Use JSX para mostrar "Hola Dojo"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Use JSX para mostrar una lista de tareas</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default PrimerReactConJSX;