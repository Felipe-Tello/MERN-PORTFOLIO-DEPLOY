import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from 'react';

import IntroToReactRoutes from './components/routes/ReactJS/IntroToReactRoutes';
import ClassComponentsRoutes from './components/routes/ReactJS/ClassComponentsRoutes';
import FunctionalComponentsRoutes from './components/routes/ReactJS/FunctionalComponentsRoutes';
import APIsRoutes from './components/routes/ReactJS/APIsRoutes';
import ReactRoutingRoutes from './components/routes/ReactJS/ReactRoutingRoutes';
import ExpressRoutes from './components/routes/ExpressJS/ExpressRoutes';
import FullStackMERNRoutes from './components/routes/FullStackMERN/FullStackMERNRoutes';
import AdvancedMERNRoutes from './components/routes/FullStackMERN/AdvancedMERNRoutes';
import MongooseRoutes from './components/routes/MongoDB/MongooseRoutes';
import MongoDBRoutes from './components/routes/MongoDB/MongoDBRoutes';
import FundamentalsRoutes from './components/routes/JavascriptFundamentals/FundamentalsRoutes';
import OopRoutes from './components/routes/JavascriptFundamentals/OopRoutes';
import FunctionalProgrammigRoutes from './components/routes/JavascriptFundamentals/FunctionalProgrammigRoutes';
import AuthenticationRoutes from './components/routes/MERNAuth/AuthenticationRoutes';
import SocketIORoutes from './components/routes/SocketIO/SocketIORoutes';

import Home from './components/Home';
import Footer from './components/Footer';
import Superior from './components/Superior';
import Lateral from './components/Lateral';
import MERNCloudRoutes from './components/routes/MERNDeployment/MERNCloudRoutes';

export const NavContext = createContext();

const App = () => {

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
      <BrowserRouter>
      <NavContext.Provider value={selectedOption}>
        <Superior onSelect={setSelectedOption}></Superior>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", minHeight:"70vh"}}>
          <div>
            <Lateral></Lateral>
          </div>
          <div style={{ minWidth:'75%'}}>
            <Routes>
              <Route path='/*'>
                <Route path="home" element={<Home />} />
                <Route path='fundamentals/*' element={<FundamentalsRoutes />}></Route>
                <Route path='oop/*' element={<OopRoutes />}></Route>
                <Route path='functional-programming/*' element={<FunctionalProgrammigRoutes />}></Route>
                <Route path='intro-to-react/*' element={<IntroToReactRoutes />}></Route>
                <Route path='class-components/*' element={<ClassComponentsRoutes />}></Route>
                <Route path='functional-components/*' element={<FunctionalComponentsRoutes />}></Route>
                <Route path='apis/*' element={<APIsRoutes />}></Route>
                <Route path='react-routing/*' element={<ReactRoutingRoutes />}></Route>
                <Route path='express/*' element={<ExpressRoutes />}></Route>
                <Route path='full-stack-mern/*' element={<FullStackMERNRoutes />}></Route>
                <Route path='advanced-mern/*' element={<AdvancedMERNRoutes />}></Route>
                <Route path='mongoose/*' element={<MongooseRoutes />}></Route>
                <Route path='mongodb/*' element={<MongoDBRoutes />}></Route>
                <Route path='authentication/*' element={<AuthenticationRoutes />}></Route>
                <Route path='socketio/*' element={<SocketIORoutes />}></Route>
                <Route path='deployment/*' element={<MERNCloudRoutes />}></Route>
              </Route>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </NavContext.Provider>
      </BrowserRouter>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
