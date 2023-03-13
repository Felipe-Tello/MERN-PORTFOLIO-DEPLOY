import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { sectionsNav } from "../data/data";
import { Link } from 'react-router-dom';

const MainNav = () => {

    const dashLower = text =>{
        text = text.replace(/ /g, "-");
        text = text.toLowerCase();
        return text;
    }

    return (
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                {sectionsNav.map((item, index) =>
                        item.section.length>0
                        ?
                    <NavDropdown title={item.value} id="nav-dropdown" key={index}>
                        {item.section.map((coreValue, index)=> {
                            return <NavDropdown.Item  key={index} as={Link} to={`/${dashLower(coreValue)}`}>{coreValue}</NavDropdown.Item>
                        })}
                    </NavDropdown>
                        :
                    <Nav.Item key={index}>
                        <Nav.Link as={Link} to={`/${item.value}`}>
                            {item.value}
                        </Nav.Link>
                    </Nav.Item>
                )}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}

export default MainNav;