import {useState} from "react";
import styles from './ReactJS.module.css' ;

const Pestanas = ({labelContent}) => {

    const [idSelected, setIdSelected] = useState(0);

    const onClickHandler = (e, value) => {
        setIdSelected(value);
    }

    return (
        <div>
            <div className="Title">
                <h2>Pestañas <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/6-%20Tabs/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Desarrolla un componente de pestañas que reciba un array de elementos. Cada elemento tendrá una etiqueta y una propiedad de contenido. Al hacer clic en la cabecera de cada de pestaña, debe cambiar el estado de las pestañas para que se muestre el contenido correcto.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.tabsContainer} bgn-primary`}>
                        <div style={{width:"100%",display:"flex"}}>
                        {labelContent.map((tab, index) => {
                            return(
                                <div key={index} className={`${styles.tabs}`} onClick={(e) => onClickHandler(e,index)}>
                                    <h6>{tab.label}</h6>
                                </div>
                            )
                            })
                        }
                        </div>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center" , border:"2px grey solid", borderTop:"none", height:"15vh",}}>
                            {<p>{labelContent[idSelected].content}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea un componente de pestañas que acepte una matriz de longitud variable.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Haz que los encabezados de las pestañas, al hacer clic en ellos, muestren correctamente el contenido apropiado a continuación.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonificación Ninja: permite que cada pestaña tenga opcionalmente una devolución de llamada que se activa cuando se hace clic en el encabezado de la pestaña correspondiente.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonificación Ninja: agrega algunas animaciones CSS a la pestaña de cambio para suavizar la experiencia del usuario</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bono Sensei: agrega una animación JavaScript a la acción de cambio de pestaña.</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default Pestanas;
