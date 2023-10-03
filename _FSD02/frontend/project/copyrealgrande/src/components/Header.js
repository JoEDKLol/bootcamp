import React from "react";
import styles from './Header.module.css'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();
    
    let signUpClickHandler = () => {
        navigate('/signUp');
    }


    return ( 
        <React.Fragment>
            <div className="row container-fluid bg-warning align-items-center p-2">
                <div className="col-4">
                    <Link to='/'>
                    <img className={styles.imgLog} src="/imgs/logo.png" alt=""/>
                    </Link>
                </div>
                <div className="col-4"> 
                    Copy RealRand Project
                </div>
                <div className="col-4 text-end">
                    <Link to='/login'>
                    <button className="btn btn-sm btn-primary me-2">Login</button>
                    </Link>
                    <button className="btn btn-sm btn-info" onClick={signUpClickHandler}>SignUp</button>
                </div>
            </div>
        </React.Fragment>
     );
}
 

 
export default Header;

    



    
