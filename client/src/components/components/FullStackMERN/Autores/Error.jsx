import {Link}  from "react-router-dom";
const Error = ({commonData2}) => {
    return (
        <div>
            <div className="Title">
                <h2>{commonData2.title} <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/2-%20Authors"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>{commonData2.description}</p>
            </div>
            <div className="Disclaimer">
            </div> 
            <div className="Core no-code">
                <div style={{width:"80%", display:"flex", justifyContent:"center", flexDirection:"column", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                    <div style={{textAlign:"center"}}>
                        <h2>Favorite authors</h2>
                        <Link className="btn btn-success" to={`/advanced-mern/autores/`}>Home</Link>
                    </div>
                    <h1>We're sorry, but we couldn't find the author you're looking for.</h1> 
                    <h3>Do you want to add this author to our database?</h3>
                    <Link className="btn btn-success" to={`/advanced-mern/autores/new`}>Add an author</Link>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData2.objectives.map((objective, index) => (
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
 
export default Error;