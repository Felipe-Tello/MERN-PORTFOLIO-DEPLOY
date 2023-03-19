import { Route, Routes } from 'react-router-dom';
import PrimerReact from '../../components/ReactJS/PrimerReact';
import PrimerReactConJSX from '../../components/ReactJS/PrimerReactConJSX';
import IntroToReactIndex from '../../Introduction/2-ReactJS/1-IntroToReactIndex';

const IntroToReactRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<IntroToReactIndex />}/>
                <Route path="/primer-react" element={<PrimerReact />}/>
                <Route path="/primer-react-con-jxs" element={<PrimerReactConJSX/> }/>
            </Routes>
        </div>
    )
}

export default IntroToReactRoutes;