import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import {useNavigate } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

const Dashboard = ({commonData1}) => {

    let navigate = useNavigate()
    const [user, setUser] = useState({});

    //Show Product List 
    useEffect( () => {
        const token = Cookies.get('usertoken');
        if (token) {
            const decodedToken = jwt_decode(token);
            setUser(decodedToken);
        }
        axios.get("http://localhost:8000/api/authorsJWT", {withCredentials: true})
            .catch(err => {
                if(err.response.status === 401){
                    navigate("/authentication/autenticacion-simple");
                }
            });
    }, [navigate])

    return (
        <div>
            <div className="Title">
                <h2>{commonData1.title}</h2>
                
                <p>{commonData1.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <ButtonLogout></ButtonLogout>
                <h2>Welcome Back</h2>
                <h3>{user.firstName}, {user.lastName}</h3>
                <br />
                <h2>Your data</h2>
                <h3>First Name: {user.firstName}</h3>
                <h3>Last Name: {user.lastName}</h3>
                <h3>ID: {user._id}</h3>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData1.objectives.map((objective, index) => (
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
    )
}

export default Dashboard;