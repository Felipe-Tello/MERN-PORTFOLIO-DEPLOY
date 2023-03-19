import { Route, Routes } from 'react-router-dom';
import Home from '../../components/ReactJS/PracticaEnrutamiento/Home';
import ParamsId from '../../components/ReactJS/PracticaEnrutamiento/ParamsId';
import StarwarsAPI from '../../components/ReactJS/StarwarsAPI';
import ReactRoutingIndex from '../../Introduction/2-ReactJS/5-ReactRoutingIndex';

const ReactRoutingRoutes = () =>{

    const commonData = {
        title: 'Práctica de enrutamiento',
        description: 'Crear una aplicación React simple que pueda manejar las distintas rutas utilizando el hook useParams()',
        objectives: ['Crear la ruta "localhost:3000/home" Esto debería mostrar la página de inicio, con un encabezado genérico de "Bienvenida".', 'Crear la ruta "localhost:3000/4" Esto debería mostrar el número "4", o cualquier otro número que se haya enviado.', 'Crear la ruta "localhost:3000/hello" Esto debería mostrar la palabra "hello" o cualquier otra palabra que se haya enviado.', 'Crear la ruta "localhost:3000/hola/azul/rojo" Esto debería mostrar la palabra "hola" en texto azul con un fondo rojo. Debería funcionar con cualquier otra palabra y colores válidos.']
    };

    return(
        <div>
            <Routes>
                <Route path="/" element={<ReactRoutingIndex/>}/>
                <Route path="/practica-de-enrutamiento" element={<Home commonData={commonData}/>}/>
                <Route path="/practica-de-enrutamiento/:id" element={<ParamsId commonData={commonData}/>}/>
                <Route path="/practica-de-enrutamiento/:id/:color/:bgcolor" element={<ParamsId commonData={commonData}/>}/>
                <Route path="/luke-apiwalker" element={<StarwarsAPI />}/>
            </Routes>
        </div>
    )
}

export default ReactRoutingRoutes;