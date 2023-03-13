import { Route, Routes } from 'react-router-dom';
import AWS from '../../components/MERNDeployment/AWS';
import Azure from '../../components/MERNDeployment/Azure';
import GCP from '../../components/MERNDeployment/GCP';
import Oracle from '../../components/MERNDeployment/Oracle';

const MERNCloudRoutes = () =>{

    return(
        <div>
            <Routes>
                <Route path="/amazon-web-services" element={<AWS />}/>
                <Route path="/microsoft-azure" element={<Azure />}/>
                <Route path="/google-cloud-plataform" element={<GCP />}/>
                <Route path="/oracle-cloud" element={<Oracle />}/>
            </Routes>
        </div>
    )
}

export default MERNCloudRoutes;