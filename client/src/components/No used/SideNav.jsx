import { sectionsSideNav } from "../../data/data";
// import { useState } from "react";
import { NavLink, useParams, useResolvedPath} from 'react-router-dom';
import { Link } from "react-router-dom";

const SideNav = () => {

    const dashLower = text => {
        text = text.replace(/ /g, "-");
        text = text.toLowerCase();
        return text;
    }
    const url = useResolvedPath("").pathname;
    // let { ruta } = useRouteMatch().params;
    const { sections } = useParams();
    const filteredSections = sectionsSideNav.filter(section => section.value.includes(""));

    return (
        <nav>
            <div>
                <div>{}</div>
                <ul>
                    {filteredSections.map((item, index) =>
                    <li key={index}>
                        {item.value}
                        {item.core.length > 0 && (
                            <ul>
                                {item.core.map((coreValue, index) =>{
                                    // return <li key={index}>{coreValue}</li>
                                    // return <li key={index}><a as={Link} href={`/${dashLower(coreValue)}`}>{coreValue}</a></li>
                                    return <li key={index}><NavLink as={Link} to={`/fundamentals/${dashLower(coreValue)}`}>{coreValue}</NavLink></li>
                                })}
                            </ul>
                        )}
                    </li>
                    )}
                    {/* {sections3.map((item, index) =>
                    <li key={index}>
                        <p>{item.value}</p>
                        {item.core.length > 0 && (
                            <ul>
                                {item.core.map((coreValue, index) =>{
                                    return <li key={index}>{coreValue}</li>
                                })}
                            </ul>
                        )}
                    </li>
                    )} */}
                </ul>
            </div>
        </nav>
    )
}

export default SideNav;