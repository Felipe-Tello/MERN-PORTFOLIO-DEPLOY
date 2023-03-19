import { content, priority } from '../../data/data';
// import { NavContext } from "../App"
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Lateral = (props) => {

    let selectedOption = sessionStorage.getItem('selectedOption');
    if (!selectedOption) {
    selectedOption = 'home';
    }
    //const selectedOption = useContext(NavContext);
    const location = useLocation();

    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        if (location.pathname === ("/"+dashLower(selectedOption))) {
            setActiveTab("")
        }
    },[location.pathname, selectedOption]);
    

    const handleClick = (index) => {
        setActiveTab(index);
      }

    const dashLower = text => {
        text = text.replace(/ /g, "-");
        text = text.toLowerCase();
        return text;
    }
    
    const checkPriority = (text) => {
        const result = priority.find(({ section }) => section.includes(text));
        if (result) {
            // console.log(result.value);
            return result.value;
        } else {
            console.log("error asignando color a barra lateral");
            return false;
        }
    }

    const assignColor = (text) =>{
        if (checkPriority(text) === "mandatory") {
            return "active-mandatory"
        }
        if (checkPriority(text) === "practice") {
            return "active-practice"
        }
        if (checkPriority(text) === "optional") {
            return "active-optional"
        }
        if (checkPriority(text) === "original") {
            return "active-original"
        }
        else{
            return false
        }
    }

    return (
        <div style={{minWidth:"20%"}}>
            
            {content.map((section, index) => {
            const [,valor] = Object.entries(section.section).find(([key, value]) => key === selectedOption) || [];

            if (valor) {
                const priority = [];
                let uniquePriority = []
                valor.forEach((value, index) => {
                    priority.push(checkPriority(value))
                    uniquePriority = priority.filter((value, index, self) => {
                        return self.indexOf(value) === index
                    })
                })

                return (
                <div key={index} style={{display:"flex", flexDirection:"column", alignItems:"center", width:'15vw', background:"#303134", padding:"10% 5%", marginRight:"2vw", borderRadius:"10px"}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
                        <div>
                            <div className={uniquePriority.includes("mandatory") ? "section-mandatory" : "section-no"}><h6>Mandatory</h6></div>
                        </div>
                        <div>
                            <div className={uniquePriority.includes("practice") ? "section-practice" : "section-no"}><h6>Practice</h6></div>
                        </div>
                        <div>
                            <div className={uniquePriority.includes("optional") ? "section-optional" : "section-no"}><h6>Optional</h6></div>
                        </div>
                        <div>
                            <div className={uniquePriority.includes("original") ? "section-original" : "section-no"}><h6>Original</h6></div>
                        </div>
                    </div>
                    <div className="nav flex-column nav-pills" aria-orientation="vertical" style={{marginTop:"10%", width:"13vw"}}>
                        <Link style={{textDecoration:"none"}} to={`/${dashLower(selectedOption)}`}>
                            <button style={{width:"100%", marginBottom:"5%"}} className="nav-link active">Introduction</button>
                        </Link>
                        {valor.map((value, index) => (
                        <Link style={{textDecoration:"none"}} key={index} to={`/${dashLower(selectedOption)}/${dashLower(value.normalize("NFD").replace(/[\u0300-\u036f,]/g, ""))}`}>
                            <button style={{width:"100%", marginTop:"1%"}} onClick={() => handleClick(value)} className={activeTab === value ? `nav-link ${assignColor(value)}` : 'nav-link' } >{value}</button>
                        </Link>
                        ))}
                    </div>
                </div>
                );
            }
            else {
                return null;
            }
            })}
        </div>

    );
}
 
export default Lateral;