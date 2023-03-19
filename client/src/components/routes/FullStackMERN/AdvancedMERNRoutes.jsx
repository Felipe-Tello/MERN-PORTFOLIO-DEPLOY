import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../components/FullStackMERN/Autores/Dashboard';
import Error from '../../components/FullStackMERN/Autores/Error';
import NewAuthor from '../../components/FullStackMERN/Autores/NewAuthor';
import UpdateAuthor from '../../components/FullStackMERN/Autores/UpdateAuthor';
import Dashboard2 from '../../components/FullStackMERN/TeamManagement/Dashboard';
import NewPlayer from '../../components/FullStackMERN/TeamManagement/NewPlayer';
import PlayerStatus from '../../components/FullStackMERN/TeamManagement/PlayerStatus';
import ShowPlayer from '../../components/FullStackMERN/TeamManagement/ShowPlayer';

import Dashboard3 from '../../components/FullStackMERN/RefactorizarReutilizarReciclar/Dashboard';
import ShowProduct from '../../components/FullStackMERN/RefactorizarReutilizarReciclar/ShowProduct';
import UpdateProduct from '../../components/FullStackMERN/RefactorizarReutilizarReciclar/UpdateProduct';
import AdvancedMERNIndex from '../../Introduction/5-Full-Stack MERN/2-AdvancedMERNIndex';

const AdvancedMERNRoutes = () =>{

    const commonData1 = {
        title: 'Refactorizar, reutilizar, reciclar',
        description: 'Usando la asignación "Administrador de Producto", asegúrarse de no repetir codigo y volver a escribir sus componentes para poder reutilizarlos.',
        objectives: ['Asegúrate de tener solo un componente de formulario que se utilice para crear y actualizar un producto.', 'Asegúrate de tener solo un botón Eliminar que pueda enchufar en cualquier lugar.']
    };

    const commonData2 = {
        title: 'Autores',
        description: 'Crea una aplicación donde los usuarios envíen sus autores favoritos. Enumera todos los autores en la primera página. Apartir de ahí, el usuario puede hacer clic en un botón para editar o eliminar cada autor.',
        objectives: ['Crea una aplicación CRUD completa con React, Express, Node y MongoDB.', 'Incluir validaciones de back-end.']
    };

    const commonData3 = {
        title: 'Administrador de equipo',
        description: 'Crea una aplicación "Team Manager" que gestione tu lista de equipos y respuestas para una serie de 3 juegos. Específicamente, deberíamos poder agregar y eliminar jugadores. También deberíamos poder ver el estado de cada jugador de "Jugar", "No jugar" e "Indeciso" para cada uno de los 3 juegos.',
        objectives: ['Crea una página para mostrar la lista de todos los jugadores.',
        'Crea una página para agregar un nuevo jugador, que redirige a la página de la lista.',
        'Cuando eliminas un reproductor, deberían desaparecer automáticamente sin una actualización de página.',
        'Por defecto, todas las validaciones deben provenir del backend.',
        'NINJA BONUS: también crea validaciones front-end.',
        'NINJA BONUS: crea una ventana emergente para confirmar la eliminación de un jugador.',
        'SENSEI BONUS: Crear la página de estado del jugador.']
    };

    return(
        <div>
            <Routes>
                <Route path="/" element={<AdvancedMERNIndex/>}/>
                <Route path="/refactorizar-reutilizar-reciclar" element={<Dashboard3 commonData1={commonData1}/>}/>
                <Route path="/refactorizar-reutilizar-reciclar/:id" element={<ShowProduct commonData1={commonData1}/>}/>
                <Route path="/refactorizar-reutilizar-reciclar/:id/edit" element={<UpdateProduct commonData1={commonData1}/>}/>

                <Route path="/autores" element={<Dashboard commonData2={commonData2}/>}/>
                <Route path="/autores/new" element={<NewAuthor commonData2={commonData2}/>}/>
                <Route path="/autores/edit/:id" element={<UpdateAuthor commonData2={commonData2}/>}/>
                <Route path="/autores/error" element={<Error commonData2={commonData2}/>}/>

                <Route path="/administrador-de-equipo" element={<Dashboard2 commonData3={commonData3}/>}/>
                <Route path="/administrador-de-equipo/players/addplayer" element={<NewPlayer commonData3={commonData3}/>}/>
                <Route path="/administrador-de-equipo/status/game/:id" element={<PlayerStatus commonData3={commonData3}/>}/>
                <Route path="/administrador-de-equipo/players/:id" element={<ShowPlayer commonData3={commonData3}/>}/>
            </Routes>
        </div>
    )
}

export default AdvancedMERNRoutes;