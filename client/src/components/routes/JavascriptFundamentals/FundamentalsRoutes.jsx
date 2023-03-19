import { Route, Routes } from 'react-router-dom';
import ConvertirAFlecha from '../../components/JavascriptFundamentals/ConvertirAFlecha';
import Hoist from '../../components/JavascriptFundamentals/Hoist';
import HowLong from '../../components/JavascriptFundamentals/HowLong';
import Predict from '../../components/JavascriptFundamentals/Predict';
import QuickSort from '../../components/JavascriptFundamentals/QuickSort';
import FundamentalsIndex from '../../Introduction/1-Javascript Fundamentals/1-FundamentalsIndex';

const FundamentalsRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<FundamentalsIndex/>}/>
                <Route path="/hoist-de-javascript" element={<Hoist/>}/>
                <Route path="/predecir-la-desestructuracion" element={<Predict/>}/>
                <Route path="/convertir-a-flecha" element={<ConvertirAFlecha/>}/>
                <Route path="/cuanto-tiempo-tomo" element={<HowLong/>}/>
                <Route path="/ordenamiento-rapido" element={<QuickSort/>}/>
            </Routes>
        </div>
    )
}

export default FundamentalsRoutes;