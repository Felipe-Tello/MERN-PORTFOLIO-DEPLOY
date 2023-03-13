const Home = ({commonData}) => {
    return (
        <div>
            <div className="Title">
                <h2>{commonData.title} <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/5-%20React%20routing/1-%20Routing%20practice/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>{commonData.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core no-code" style={{flexDirection:"column", alignItems:"center"}}>
                <div style={{display:"flex",flexDirection:"column", alignItems:"center", width:"60%", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                    <h5>Possible routes</h5>
                    <ul>
                        <li>.../react-routing/practica-de-enrutamiento - <a href="/react-routing/practica-de-enrutamiento">Back to home</a></li>
                        <li>.../react-routing/practica-de-enrutamiento/"number" - Example: <a href="/react-routing/practica-de-enrutamiento/5">5</a></li>
                        <li>.../react-routing/practica-de-enrutamiento/"word" - Example: <a href="/react-routing/practica-de-enrutamiento/portfolio">portfolio</a></li>
                        <li>.../react-routing/practica-de-enrutamiento/"word"/"color"/"color" - Example: <a href="/react-routing/practica-de-enrutamiento/MERN/red/green">MERN/red/green</a></li>
                    </ul>
                    <h1>Welcome</h1>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData.objectives.map((objective, index) => (
                        <li key={objective}>
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
 
export default Home;