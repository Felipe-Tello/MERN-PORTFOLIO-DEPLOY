import {useState} from "react";

const GeneradorDeCaja = () => {

    const [blocks, setBlocks] = useState([]);
    const [color, setColor] = useState("");
    const [number, setNumber] = useState("");

    const addBlock = e =>{
        e.preventDefault();
        if (CSS.supports("color", color)&& number === "") {
            setBlocks([...blocks, { style: { backgroundColor: color, width: 100, height: 100 } }]);
            setColor("");
        }
        if (CSS.supports("color", color)&& number !== ""){
            setBlocks([...blocks, { style: { backgroundColor: color, width: parseInt(number), height: parseInt(number) } }]);
            setColor("");
            setNumber("");
        }
    }

    return (
        <div>
            <div className="Title">
                <h2>Generador de caja <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/5-%20Box%20generator/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Crear un componente con un formulario dentro que acepte el nombre de un color. Cuando se envía el formulario, agregar un cuadro al conjunto de cuadros con el color correspondiente.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className="bgn-primary" style={{minWidth:"40%", maxWidth:"50%", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <form onSubmit={addBlock}>
                            <div>
                                <label>Color</label>
                                <input placeholder="Ex: red" type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)}/>
                            </div>
                            <div>
                                <label>Dimensions</label>
                                <input placeholder="Ex: 100" type="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)}/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", marginTop:"5%"}}>
                                <button type="submit" className="btn btn-success">Add</button>
                            </div>
                        </form>
                        <br />
                        <div style={{display:"flex", flexWrap:"wrap"}}>
                            {blocks.map((block, index) =>{
                                return <div key={index} style={block.style}></div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Permitir al usuario crear o agregar cuadros de varios colores.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Al agregar con éxito un nuevo cuadro, haz que aparezca en el conjunto de inmediato.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonus Ninja: borrar la entrada de color en caso de que el envío sea exitoso.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonificación Ninja: Agrega una segunda entrada que tome un entero. Este entero permitirá al usuario especificar la altura y el ancho del cuadro generado.</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default GeneradorDeCaja;