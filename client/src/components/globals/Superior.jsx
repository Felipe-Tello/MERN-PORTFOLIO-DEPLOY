import { content } from '../../data/data';
import { Link } from "react-router-dom";

const Superior = (props) => {

    const dashLower = text => {
        text = text.replace(/ /g, "-");
        text = text.toLowerCase();
        return text;
    }

    const handleSelect = (option) => {
        props.onSelect(option);
        sessionStorage.setItem('selectedOption', option);
    };

    const setNone = () => {
        sessionStorage.setItem('selectedOption', "Home");
    };

    return (
        <div style={{height:"15vh", display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"2%"}}>
            <div style={{width:"100%"}}>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item" style={{backgroundColor:"black", height:"100%"}}>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <button onClick={() => setNone()} className="nav-link" style={{color:"white", textDecorationLine:"line-through"}}>Web fundamentals</button>
                        </Link>
                    </li>
                    <li className="nav-item" style={{backgroundColor:"white"}}>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <button onClick={() => setNone()} className="nav-link" style={{color:"black"}}>Fullstack MERN</button>
                        </Link>
                    </li>
                    <li className="nav-item" style={{backgroundColor:"black"}}>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <button onClick={() => setNone()} className="nav-link" style={{color:"white", textDecorationLine:"line-through"}}>Fullstack Java</button>
                        </Link>
                    </li>
                    <li className="nav-item" style={{backgroundColor:"black"}}>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <button onClick={() => setNone()} className="nav-link" style={{color:"white", textDecorationLine:"line-through"}}>Fullstack Python</button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"1%", width:"fit-content"}}>
                <div>
                    <nav className="me-auto" style={{display:"flex",width:"80vw", justifyContent:"space-evenly", padding:"1% 0 1% 0", borderBottom:"1px solid white"}}>
                        <div style={{width:"5vw",padding:"1% 0 1% 0"}}>
                            <Link className="dropbtn" style={{textDecoration:"none"}} onClick={() => setNone()} to={`/home`}>Home</Link>
                        </div>
                        <div style={{display:"flex",width:"60vw", justifyContent:"space-around"}}>
                            {content.map((section, index) => 
                            <div key={index}>
                                {Object.keys(section.section).length>0 ?
                                <div className="dropdown">
                                    <button className="dropbtn" >{section.value}</button>
                                    <div className="dropdown-content">
                                    {Object.keys(section.section).map((key, index) => (
                                        <Link style={{width:"100%", height:"fit-content", textAlign:"center"}} to={`/${dashLower(key)}`} key={index} onClick={() => handleSelect(key)}>
                                            {key}
                                        </Link>
                                    ))}
                                    </div>
                                </div>
                                :
                                <div style={{display:"flex"}}>
                                    <Link className="dropbtn" style={{textDecoration:"none"}} onClick={() => handleSelect(section.value)} to={`/${dashLower(section.value)}`}>{section.value}</Link>
                                </div>
                                }
                            </div>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Superior;