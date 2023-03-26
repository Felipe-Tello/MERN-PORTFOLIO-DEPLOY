import { content, priority } from '../../data/data';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../globals/Superior/style.css"
import ConditionalView from './ConditionalView';

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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className='fix-nav'>
            <nav style={{display:"flex", flexDirection:"column", padding:"0"}} class="navbar navbar-expand-xl bg-body-tertiary fixed-top">
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
                <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <button style={{marginRight:"auto"}} class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLgLeft" aria-controls="navbarOffcanvasLg">
                        <span class="navbar-toggler-icon"></span>
                    </button>                
                    <Link className="navbar-brand" style={{margin:"0"}} onClick={() => setNone()} to={`/home`}>Home</Link>
                    <ConditionalView maxWidth={1199} minWidth={0}>
                    <button style={{marginLeft:"auto"}} class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLgRight" aria-controls="navbarOffcanvasLg">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLgRight" aria-labelledby="navbarOffcanvasLgLabel">
                        <ul class="navbar-nav mb-2 mb-lg-0">
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
                                    <div style={{width:"100%", textAlign:"center"}}>
                                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", marginTop:"30px"}}>
                                            <div>
                                                <div style={{width:"30vw", height:"35px"}} className={uniquePriority.includes("mandatory") ? "section-mandatory" : "section-no"}><h6>Mandatory</h6></div>
                                            </div>
                                            <div>
                                                <div style={{width:"30vw", height:"35px"}} className={uniquePriority.includes("practice") ? "section-practice" : "section-no"}><h6>Practice</h6></div>
                                            </div>
                                            <div>
                                                <div style={{width:"30vw", height:"35px"}} className={uniquePriority.includes("optional") ? "section-optional" : "section-no"}><h6>Optional</h6></div>
                                            </div>
                                            <div>
                                                <div style={{width:"30vw", height:"35px"}} className={uniquePriority.includes("original") ? "section-original" : "section-no"}><h6>Original</h6></div>
                                            </div>
                                        </div>
                                    <li class="nav-item"><Link class="nav-link active" to={`/${dashLower(selectedOption)}`}>Introduction</Link></li>
                                    {valor.map((value, index) => (
                                        <Link class="nav-link" key={index} onClick={() => handleClick(value)} to={`/${dashLower(selectedOption)}/${dashLower(value.normalize("NFD").replace(/[\u0300-\u036f,]/g, ""))}`}>{value}</Link>
                                    ))}
                                    </div>
                                );
                            }
                            else {
                                return null;
                            }
                            })}
                        </ul>
                    </div>
                    </ConditionalView>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="navbarOffcanvasLgLeft" aria-labelledby="navbarOffcanvasLgLabel">
                        <ul class="navbar-nav mb-2 mb-lg-0" style={{textAlign:"center"}}>
                            {content.map((section, index) =>
                            <li key={index} className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{section.value}</a>
                                <ul className="dropdown-menu">
                                {Object.keys(section.section).map((key, index) => (
                                    <div>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="nav-link" to={`/${dashLower(key)}`} key={index} onClick={() => handleSelect(key)}>{key}</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                    </div>
                                ))}
                                </ul>
                            </li>
                            )}                  
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Superior;