import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../components/FullStackMERN/AdministradorProductos1/Dashboard';
import Dashboard2 from '../../components/FullStackMERN/AdministradorProductos2/Dashboard';
import Dashboard3 from '../../components/FullStackMERN/AdministradorProductos3/Dashboard';
import ShowProduct2 from '../../components/FullStackMERN/AdministradorProductos2/ShowProduct';
import ShowProduct3 from '../../components/FullStackMERN/AdministradorProductos3/ShowProduct';
import UpdateProduct3 from '../../components/FullStackMERN/AdministradorProductos3/UpdateProduct';
import FullStackMERNIndex from '../../Introduction/5-Full-Stack MERN/1-FullStackMERNIndex';

const FullStackMERNRoutes = () =>{

    const commonData1 = {
        title: 'Administrador de Productos (Parte I)',
        description: 'Crear un proyecto CRUD completo en el stack de MERN, la primera parte implementa CREATE con solicitudes POST.',
        objectives: ['Crea tu estructura de carpetas de pila MERN.', 'Crea tu servidor, modelo, controlador, rutas y archivos de configuración para tu servidor', 'En el extremo del cliente ==> Crea un componente de formulario para que tu Producto pueda tener un título, precio y descripción.', 'Comprueba en tu base de datos que tus productos se están agregando.']
    };

    const commonData2 = {
        title: 'Administrador de Productos (Parte II)',
        description: 'Crear un proyecto CRUD completo en el stack de MERN, la segunda parte implementa CREATE y READ con solicitudes POST y GET.',
        objectives: ['Crea un componente para enumerar todos los productos en tu página principal.', 'Crea un nuevo componente de vista que te permita ver los detalles de un producto en particular (localhost:3000/:id).', 'Enlaza a la página de detalles en la lista de productos.']
    };
    
    const commonData3 = {
        title: 'Administrador de Productos (Parte III)',
        description: 'Crear un proyecto CRUD completo en el stack de MERN, la tercera parte implementa CREATE, READ, UPDATE y DELETE con solicitudes POST, GET, PUT y DELETE.',
        objectives: ['Agrega la ruta localhost: 3000 /: id / edit que incluirá un formulario completado automáticamente para editar un producto determinado.', 'Agrega un botón de eliminación en el componente Lista, así como el componente de detalle que eliminará el producto de la base de datos.', 'Después de eliminar el producto del componente Detalle, redirija a la vista principal.', 'Después de eliminar el producto de la vista principal, actualice el DOM para que se elimine el producto.']
    };

    return(
        <div>
            <Routes>
                <Route path="/" element={<FullStackMERNIndex/>}/>
                <Route path="/administrador-de-productos-parte-1" element={<Dashboard commonData1={commonData1} />}/>

                <Route path="/administrador-de-productos-parte-2" element={<Dashboard2 commonData2={commonData2}/>}/>
                <Route path="/administrador-de-productos-parte-2/:id" element={<ShowProduct2 commonData2={commonData2}/>} />

                <Route path="/administrador-de-productos-parte-3" element={<Dashboard3 commonData3={commonData3}/>}/>
                <Route path="/administrador-de-productos-parte-3/:id" element={<ShowProduct3 commonData3={commonData3}/>} />
                <Route path="/administrador-de-productos-parte-3/:id/edit" element={<UpdateProduct3 commonData3={commonData3}/>} />
            </Routes>
        </div>
    )
}

export default FullStackMERNRoutes;