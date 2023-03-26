import { useParams } from "react-router-dom";
import styles from '../ReactJS.module.css' ;

const ParamsId = ({commonData}) => {

    const {id,color,bgcolor} = useParams();

    let style = {};

    if (color && bgcolor) {
      style = { color: color, backgroundColor: bgcolor };
    }

    return (
        <div>
            <div className="Title">
                <h2>{commonData.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/5-%20React%20routing/1-%20Routing%20practice/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>{commonData.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code" style={{flexDirection:"column", alignItems:"center"}}>
                    <div className={`${styles.routerContainer} bgn-primary`}>
                        <h5>Possible routes</h5>
                        <ul>
                            <li>.../react-routing/practica-de-enrutamiento - <a href="/react-routing/practica-de-enrutamiento">Back to home</a></li>
                            <li>.../react-routing/practica-de-enrutamiento/"number" - Example: <a href="/react-routing/practica-de-enrutamiento/5">5</a></li>
                            <li>.../react-routing/practica-de-enrutamiento/"word" - Example: <a href="/react-routing/practica-de-enrutamiento/portfolio">portfolio</a></li>
                            <li>.../react-routing/practica-de-enrutamiento/"word"/"color"/"color" - Example: <a href="/react-routing/practica-de-enrutamiento/MERN/red/green">MERN/red/green</a></li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"center"}}>
                        {(color && bgcolor) || isNaN(id) ? 
                        <h1 style={style}>The Word is: {id}</h1>
                        :
                        <h1>The Number is: {id}</h1>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData.objectives.map((objective, index) => (
                        <li key={index}>
                            <input type="checkbox" readOnly={true} checked={true} name="" id="" />
                            <label htmlFor="">{objective}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default ParamsId;