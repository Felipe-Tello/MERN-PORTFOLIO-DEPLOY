import React, { useReducer } from 'react';
import styles from './ReactJS.module.css' ;

const initialState = {
    firstName:{
        value: "",
        error: null
    },
    lastName:{
        value: "",
        error: null
    },
    email:{
        value: "",
        error: null
    },
    password:{
        value: "",
        error: null
    },
    passwordCon:{
        value: "",
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    }
};

const ValidacionDeFormulario = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: {
                value: value,
                error: validate(name, value, state)
            }
        });
    }

    function validate(name, value) {
        switch(name) {
            case "firstName":
                if (value.length < 2) return "First name must have at least 2 characters";
                break;
            case "lastName":
                if (value.length < 2) return "Last name must have at least 2 characters";
                break;
            case "email":
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid";
                break;
            case "password":
                if (value.length < 8) return "Password must have at least 8 characters";
                break;
            case "passwordCon":
                if (value !== state.password.value || value.length < 8) return "Passwords must match";
                break;
            default:
                return null;
        }
        return null;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errors = Object.values(state).reduce((acc, current) => current.error ? [...acc, current.error] : acc, []);
        if (errors.length) {
            console.error("Form has errors:", errors);
        } else {
            console.log("Form is valid, data:", state);
        }
    }

    return (
        <div>
            <div className="Title">
                <h2>Validación de formularios con useReducer <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/4-%20Form%20validation/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Validar el formulario a medida que el usuario escribe en los controles de entrada usando el Hook de useReducer().</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.forms} bgn-primary`}>
                        <h4 style={{textAlign:"center"}}>Form Data</h4>
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating">
                                <input type="text" name="firstName" className={state.firstName.value.length === 0 ? "form-control" : state.firstName.error !== null ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" onChange={handleChange} value={state.firstName.value}/>
                                <label>First Name</label>
                                {state.firstName.error !== null && (<div className="invalid-feedback">{state.firstName.error}</div>)}
                            </div>
                            <div class="form-floating">
                                <input type="text" name="lastName" className={state.lastName.value.length === 0 ? "form-control" : state.lastName.error !== null ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" onChange={handleChange} value={state.lastName.value}/>
                                <label>Last Name</label>
                                {state.lastName.error !== null && (<div className="invalid-feedback">{state.lastName.error}</div>)}
                            </div>
                            <div class="form-floating">
                                <input type="email" name="email" className={state.email.value.length === 0 ? "form-control" : state.email.error !== null ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" onChange={handleChange} value={state.email.value}/>
                                <label>Email</label>
                                {state.email.error !== null && (<div className="invalid-feedback">{state.email.error}</div>)}
                            </div>
                            <div class="form-floating">
                                <input type="password" name="password" className={state.password.value.length === 0 ? "form-control" : state.password.error !== null ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" onChange={handleChange} value={state.password.value}/>
                                <label>Password</label>
                                {state.password.error !== null && (<div className="invalid-feedback">{state.password.error}</div>)}
                            </div>
                            <div class="form-floating">
                                <input type="password" name="passwordCon" className={state.passwordCon.value.length === 0 ? "form-control" : state.passwordCon.error !== null ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" onChange={handleChange} value={state.passwordCon.value}/>
                                <label>Confirm Password</label>
                                {state.passwordCon.error !== null && (<div className="invalid-feedback">{state.passwordCon.error}</div>)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Completar la asignacion</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}

export default ValidacionDeFormulario;