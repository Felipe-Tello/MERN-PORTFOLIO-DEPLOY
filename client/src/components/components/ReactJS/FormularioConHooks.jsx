import {useState} from "react";

const FormularioConHooks = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    return (
        <div>
            <div className="Title">
                <h2>Formulario con Hooks <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/2-%20Hook%20form/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Crea un formulario como un componente React y hooks. Luego, muestra en tiempo real los datos que se ingresan en el formulario</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core no-code">
                <div style={{width:"80%", display:"flex", justifyContent:"space-around"}}>
                    <div style={{width:"40%", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <h4 style={{textAlign:"center"}}>Form Data</h4>
                        <form>
                            <div class="form-floating">
                                <input type="text" class={firstName? "form-control is-valid": "form-control is-invalid" } id="firstName" placeholder="placeholder" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                <label for="firstName">First Name</label>                            
                            </div>
                            <div class="form-floating">
                                <input type="text" class={lastName? "form-control is-valid": "form-control is-invalid" } id="lastName" placeHolder="placeholder" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                <label for="lastName">Last Name</label>                            
                            </div>
                            <div class="form-floating">
                                <input type="email" class={email? "form-control is-valid": "form-control is-invalid" } id="email" placeHolder="placeholder" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label for="email">Email</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class={password? "form-control is-valid": "form-control is-invalid" } id="password" placeHolder="placeholder" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <label for="password">Password</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class={passwordCon? "form-control is-valid": "form-control is-invalid" } id="passwordCon" placeHolder="placeholder" value={passwordCon} onChange={(e) => setPasswordCon(e.target.value)}/>
                                <label for="passwordCon">Confirm Password</label>
                            </div>
                        </form>
                    </div>
                    <div style={{width:"40%", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <h4 style={{textAlign:"center"}}>Real Time Data</h4>
                        <div class="form-floating">
                            <input disabled={true} type="text" class="form-control" value={firstName}/>
                            <label>First Name</label>                            
                        </div>
                        <div class="form-floating">
                            <input disabled={true} type="text" class="form-control" value={lastName}/>
                            <label>Last Name</label>                            
                        </div>
                        <div class="form-floating">
                            <input disabled={true} type="text" class="form-control" value={email}/>
                            <label>Email</label>
                        </div>
                        <div class="form-floating">
                            <input disabled={true} type="text" class="form-control" value={password}/>
                            <label>Password</label>
                        </div>
                        <div class="form-floating">
                            <input disabled={true} type="text" class="form-control" value={passwordCon}/>
                            <label>Confirm Password</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea entradas de formulario con los campos Nombre, Apellido, Correo electrónico, Contraseña y Confirmar contraseña</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Muestra, en tiempo real, los datos del formulario que se están escribiendo debajo del formulario</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default FormularioConHooks;