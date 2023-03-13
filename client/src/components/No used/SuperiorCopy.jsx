import { content } from '../data/data';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Superior = (props) => {

    const dashLower = text => {
        text = text.replace(/ /g, "-");
        text = text.toLowerCase();
        return text;
    }

    const handleSelect = (option) => {
        props.onSelect(option);
    };


    return (
        <div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item style={{backgroundColor:"white"}}>
                    <Nav.Link style={{color:"black"}} href="/">Fullstack MERN</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{backgroundColor:"black"}}>
                    <Nav.Link style={{color:"white", textDecorationLine:"line-through"}} eventKey="disabled">Fullstack Java</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{backgroundColor:"black"}}>
                    <Nav.Link style={{color:"white", textDecorationLine:"line-through"}} eventKey="disabled">Fullstack Python</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{backgroundColor:"black"}}>
                    <Nav.Link style={{color:"white", textDecorationLine:"line-through"}} eventKey="disabled">Web fundamentals</Nav.Link>
                </Nav.Item>
            </Nav>
  
            {/* <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {content.map((section, index) => 
                            <div key={index}>
                                {Object.keys(section.section).length>0 ?
                                <NavDropdown title={section.value} id="nav-dropdown">
                                    {Object.keys(section.section).map((key, index) => (
                                        <Nav.Link href='#' onClick={() => handleSelect(key)} key={index} as={Link} to={`/${dashLower(key)}`}>{key}</Nav.Link>
                                    ))}
                                </NavDropdown>
                                :
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleSelect(section.value)} as={Link} to={`/${dashLower(section.value)}`}>
                                        {section.value}
                                    </Nav.Link>
                                </Nav.Item>    
                                }
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            {/* //////// */}
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
                        {/* <div class="dropdown">
                            <button class="dropbtn">Dropdown</button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div> */}
                        {content.map((section, index) => 
                            <div key={index}>
                                {Object.keys(section.section).length>0 ?
                                <div class="dropdown">
                                    <button class="dropbtn">{section.value}</button>
                                    <div class="dropdown-content">
                                    {Object.keys(section.section).map((key, index) => (
                                        //    <a href="#">{key}</a>
                                         <Nav.Link href='#' onClick={() => handleSelect(key)} key={index} as={Link} to={`/${dashLower(key)}`}>{key}</Nav.Link>
                                    ))}
                                    </div>
                                </div>
                                
                                :
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleSelect(section.value)} as={Link} to={`/${dashLower(section.value)}`}>
                                        {section.value}
                                    </Nav.Link>
                                </Nav.Item>    
                                }
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Superior;