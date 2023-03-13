import { useState } from "react";

const ListaQuehaceres = () => {

    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]);

    function add(e) {
        e.preventDefault();
        if (inputVal === '') return;
        setList([...list, { text: inputVal, completed: false }]);
        setInputVal('');
    }

    function remove(index) {
        setList(list.filter((_item, i) => i !== index));
    }

    function toggleChecked(index) {
        const obj = { ...list[index] };
        obj.completed = !obj.completed;
        setList([...list.slice(0, index), obj].concat(list.slice(index + 1)));
    }

    return (
        <div>
            <div className="Title">
                <h2>Lista de quehaceres <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/7-%20To%20do%20list/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>crear una pequeña aplicación React para almacenar y modificar una lista de tareas. Cada tarea tendrá una cadena de texto, así como una propiedad completada, que se establecerá en falso inicialmente. A medida que marques los elementos, éstos deberían aparecer tachados en la página.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core no-code">
                <div style={{maxWidth:"40%", display:"flex", flexDirection:"column", justifyContent:"center", border:"2px solid black", padding:"5%"}}>
                    <form style={{display:"flex", justifyContent:"center", marginBottom:"5%"}} onSubmit={add}>
                        <input onChange={e => setInputVal(e.target.value)} value={inputVal} />
                        <button className="btn btn-success">Add</button>
                    </form>
                    {list.map((item, index) => (
                        <div key={index} style={{minWidth:"20%",display:"flex", justifyContent:"center", marginBottom:"3%"}}>
                            <input type="checkbox" id={index} checked={item.completed} onClick={() => toggleChecked(index)} readOnly />
                            <label htmlFor={index} style={{ textDecoration: item.completed && 'line-through', wordBreak:"break-all" }}>{item.text}</label>
                            <button className="btn btn-danger" onClick={() => remove(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Iterar a través de las tareas existentes utilizando el método de mapa.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Permitir al usuario agregar una nueva tarea, inicialmente configurada como no completada.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Permite al usuario eliminar una tarea haciendo clic en el botón Eliminar.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Permite al usuario alternar la propiedad de finalización de una tarea haciendo clic en la casilla de verificación</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonificación Ninja: al actualizar el estado de las tareas, no mutes los objetos de la tarea actual ni la lista de tareas actual.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bono Sensei: Persiste la lista de tareas en las actualizaciones de la página. Sugerencia, considera combinar el almacenamiento local del navegador con el gancho useEffect.</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    )
}

export default ListaQuehaceres;