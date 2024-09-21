
import { Outlet } from 'react-router-dom';
import Header from '../../Navber';

import Home from '../../../pages/Home';

const Mainlayouts = () => {
    return (
        <div>
            <Header/>
            <Home></Home>
       
           

        </div>
    );
};

export default Mainlayouts;