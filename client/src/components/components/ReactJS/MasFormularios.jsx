import {useState} from "react";

const MasFormularios = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    const enviarDatos =(e) =>{
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordCon("");
    }

    return(
        <div>
            <div className="Title">
                <h2>Más formularios <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/3-%20More%20forms/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Usando la asignación "Formulario con Hooks", agregar mensajes de error de validación.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code" >
                    <div className="bgn-primary" style={{width:"40%", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <h4 style={{textAlign:"center"}}>Form Data</h4>
                        <form onSubmit={enviarDatos}>
                            <div class="form-floating">
                                <input type="text" className={firstName.length === 0 ? "form-control" : firstName.length < 2 ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                <label>First Name</label>
                                <div class="invalid-feedback">El nombre debe ser mayor a 2 caracteres</div>
                            </div>
                            <div class="form-floating">
                                <input type="text" className={lastName.length === 0 ? "form-control" : lastName.length < 2 ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                <label>Last Name</label>
                                <div class="invalid-feedback">El Apellido debe ser mayor a 2 caracteres</div>
                            </div>
                            <div class="form-floating">
                                <input type="email" className={email.length === 0 ? "form-control" : (email.length < 2 || !email.includes("@")) ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label>Email</label>
                                <div class="invalid-feedback">Ingrese un correo valido</div>
                            </div>
                            <div class="form-floating">
                                <input type="password" className={password.length === 0 ? "form-control" : password.length < 8 ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <label>Password</label>
                                <div class="invalid-feedback">La contraseña debe ser mayor a 8 caracteres</div>
                            </div>
                            <div class="form-floating">
                                <input type="password" className={passwordCon.length === 0 ? "form-control" : passwordCon !== password ? "form-control is-invalid" : "form-control is-valid"} placeholder="placeholder" value={passwordCon} onChange={(e) => setPasswordCon(e.target.value)}/>
                                <label>Confirm Password</label>
                                <div class="invalid-feedback">Las contraseñas deben coincidir</div>
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
                        <label htmlFor="">Crear validaciones para nombre</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crear validaciones para apellido</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crear validaciones para correo</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crear validaciones para contraseña y confirmar contraseña</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonificación Sensei: solo muestra las validaciones si la entrada no está en blanco (no deberías ver los mensajes de error si no has escrito nada)</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    )
}
 
export default MasFormularios;