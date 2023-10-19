import { useState } from 'react';
import styles from './mycss/sidebar.module.css'
import { Link, useParams } from 'react-router-dom';
const Sidebar = (props) => {

    const paramObj = useParams();

    let manus = [];
    if(!paramObj.company_id){
        manus = ["My profile", "My company"];
    }else{
        manus = ["Dashboard", "Inventory", "Purchase", "Sales", "History", "Report"];
    }

    
    return ( 
        <>
            <div className={"fixed-top d-flex flex-column flex-shrink-0 p-3 text-white " + styles.sideBar} >
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src="" alt="Your Logo" />
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto ps-3 text-start">

                {
                    manus.map((elme)=>{
                        return <li key={elme} className='nav-item pt-3'><Link className={" " + styles.sideBarLink} to={"/myProfileManagement/" + "652f73dfbb5be4ed4b9588b0"}>{elme}</Link></li>
                    })
                }
                </ul>
                <hr/>
                <Link to="/login" className={" " + styles.sideBarLink}>Log out</Link>
            </div>
        </>
     );
}
 
export default Sidebar;