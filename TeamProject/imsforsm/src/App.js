//import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Navbar.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import InventoryPurchaseDetail from './InventoryPurchase/Page/InventoryPurchaseDetail';

import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';
import { useEffect, useState } from 'react';
import PageSearch from './components/PageSearch';
import NotFound from './components/NotFound';
import ShareTestPage from './components/ShareTestPage';
import InventorySalesDetails from './InventorySales/Page/InventorySalesDetails';
import Landing from './components/Landing';
import MyProfileManagement from './components/MyProfileManagement';
import Sidebar from './components/Sidebar';





function App() {

    const [userData, setUserData] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const resp = await fetch('/jsontest/user.json');
            const data = await resp.json();
            setUserData(data);
            //console.log(data);
        };
        fetchData();



    }, []);

    return (
        <div className="App">
            {/* <Navbar /> */}
            <Sidebar/>
            {/* To fix the footer - wrapper */}
            <div className='wrapper'> 
            
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login userInfo={userData} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/myProfileManagement/:userId" element={<MyProfileManagement/>} />
                <Route path="/purchaseDetail/:companyId" element={<InventoryPurchaseDetail />} />
                <Route path="/salesDetail/:companyId" element={<InventorySalesDetails />} />
                <Route path="/test" element={<ShareTestPage />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            </div>
            <Footer />





        </div>
    );
}

export default App;
