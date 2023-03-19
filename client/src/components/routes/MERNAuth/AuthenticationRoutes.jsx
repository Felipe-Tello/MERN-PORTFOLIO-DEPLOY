import { Route, Routes } from 'react-router-dom';
import Dashboard2 from '../../components/MERNAuth/AutoresJWT/Dashboard';
import Error from '../../components/MERNAuth/AutoresJWT/Error';
import Login2 from '../../components/MERNAuth/AutoresJWT/Login';
import NewAuthor from '../../components/MERNAuth/AutoresJWT/NewAuthor';
import UpdateAuthor from '../../components/MERNAuth/AutoresJWT/UpdateAuthor';
import Dashboard from '../../components/MERNAuth/SimpleAuth/Dashboard';
import Login from '../../components/MERNAuth/SimpleAuth/Login';
import AuthenticationIndex from '../../Introduction/6-MERN Auth/1-AuthenticationIndex';

const AuthenticationRoutes = () =>{

    const commonData1 = {
        title: 'Autenticacion simple',
        description: 'Crear un proyecto simple para inicio de sesion y registro, donde se ocupe la libreria Bcrypt para hash de contraseña y JWT para la autenticacion. ademas de enviar datos del usuario a traves de un payload',
        objectives: ['Actividad creada de manera independiente que no cuenta con objetivos concretos.']
    };
    
    const commonData2 = {
        title: 'Autores con Bcrypt y JWT',
        description: 'Incluir la autenticacion en un proyecto previo para mostrar la restriccion de accesos a las rutas cuando el usuario no este validado.',
        objectives: ['Actividad creada de manera independiente que no cuenta con objetivos concretos.']
    };

    return(
        <div>
            <Routes>
                <Route path="/" element={<AuthenticationIndex/>}/>
                <Route path="/autenticacion-simple" element={<Login commonData1={commonData1}/>}/>
                <Route path="/autenticacion-simple/dashboard" element={<Dashboard commonData1={commonData1}/>}/>

                <Route path="/autores-con-bcrypt-jwt" element={<Login2 commonData2={commonData2}/>}/>
                <Route path="/autores-con-bcrypt-jwt/dashboard" element={<Dashboard2 commonData2={commonData2}/>}/>
                <Route path="/autores-con-bcrypt-jwt/new" element={<NewAuthor commonData2={commonData2}/>}/>
                <Route path="/autores-con-bcrypt-jwt/edit/:id" element={<UpdateAuthor commonData2={commonData2}/>}/>
                <Route path="/autores-con-bcrypt-jwt/error" element={<Error commonData2={commonData2}/>}/>
            </Routes>
        </div>
    )
}

export default AuthenticationRoutes;