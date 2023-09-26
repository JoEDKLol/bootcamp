import React, {useState} from "react";
import styles from "./Nav.module.css";
import { Link } from 'react-router-dom';

// import styled from "styled-components";

// const StyledDiv_1 = styled.div`
//     text-align: right;
// `;




const Nav = () => {

    let [menu_a, setMenu_a] = useState(false);

    // let mouseOverHandler = () => {
    //     console.log("mouseOverHandler");
    //     setMenu_a(true);
    // }

    // let mouseOutHandler = () => {
    //     console.log("mouseOutHandler");
    //     setMenu_a(false);
    // }

    

    return ( 
        <React.Fragment>

        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className={"container-fluid " + styles.div_1}>
                <Link to={'home'} className="navbar-brand text-light">
                    <img src="img/logo.png " className="img-fluid img-thumbnail me-4" alt=""/>
                    
                </Link>
                <div className="ms-auto">
                    <button className="navbar-toggler d-lg-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mb-1 ">

                            <li className="nav-item">
                                <Link to={'home'} className="nav-link text-nowrap " >
                                    <i id="menuIcon" className={"bi-house-fill " + styles.menuIcon}> Home</i>
                                </Link>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link text-nowrap " href="index.html">
                                    <i id="menuIcon" className={"bi-house-fill " + styles.menuIcon}> Home</i>
                                </a>
                            </li> */}
                            {/* <li className="nav-item ">
                                <a className="nav-link text-nowrap " href="aboutUs.html" >
                                    <i id="menuIcon" className={"bi bi-info-lg " + styles.menuIcon}>About us</i>
                                </a>
                            </li> */}
                            <li className="nav-item ">
                                <Link to={'aboutus'} className="nav-link text-nowrap " >
                                    <i id="menuIcon" className={"bi bi-info-lg " + styles.menuIcon}>About us</i>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-nowrap" href="#" id="dropdownId"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">      
                                    <i id="menuIcon" className={"bi bi-list-task " + styles.menuIcon}> Products</i> 
                                </a>  
                                <div className="dropdown-menu bg-primary " aria-labelledby="dropdownId">
                                    <Link to={'product1'} id="menu_a" className={'dropdown-item text-white '} >Products 1 </Link>
                                    <Link to={'product2'} id="menu_a" className={"dropdown-item text-white "}> Products 2</Link>
                                </div>
                                {/* <div className="dropdown-menu bg-primary " aria-labelledby="dropdownId">
                                    <a id="menu_a" className="dropdown-item text-white" href="product1.html" >Products 1</a>
                                    <a id="menu_a" className="dropdown-item text-white" href="product2.html" >Products 2</a>
                                </div> */}
                            </li>
                            <li className="nav-item text-nowrap">
                                <Link to={'contactus'} className="nav-link">
                                    <i id="menuIcon" className={"bi bi-person-vcard-fill me-1 " + styles.menuIcon}> Contact Us</i>
                                </Link>
                                {/* <a className="nav-link" href="contactUs.html">
                                    <i id="menuIcon" className={"bi bi-person-vcard-fill me-1 " + styles.menuIcon}> Contact Us</i>
                                </a> */}
                            </li>
                            <li className="nav-item text-nowrap ">
                                <Link to={'faq'} className="nav-link">
                                    <i id="menuIcon" className={"bi bi-question-square me-1 " + styles.menuIcon }> FAQ</i>
                                </Link>
                                {/* <a className="nav-link" href="faq.html">
                                    <i id="menuIcon" className={"bi bi-question-square me-1 " + styles.menuIcon }> FAQ</i>
                                </a> */}
                            </li>
                        </ul>
                        <div className="div mb-1">
                            <a className=" navbar-brand text-light text-nowrap " href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                                <i id="menuIcon" className={"bi bi-box-arrow-in-right " + styles.menuIcon}> login</i>   
                            </a>
                        </div>
                    </div>                
                </div>
            </nav>



        </React.Fragment>
     );
}
 
export default Nav;