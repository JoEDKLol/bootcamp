import styles from './Home.module.css'
import React, {useState,useEffect } from "react";

const Home = () => {

    let [styleCar, setStyleCar] = useState(" visually-hidden ");
    let [styleSpn, setStyleSpn] = useState(" ");

    useEffect(() => {
        setStyleCar(" ")
        setStyleSpn(" visually-hidden ");
        console.log("useEffect!!");
    });




    return ( 
        <React.Fragment>
            <div className={"container-fluid  pt-5 " + styles.div_home}>
                <div id="carouselExampleControls" className="carousel slide text-center mt-5 mx-5 px-5 pt-4"  data-bs-ride="carousel">
                <div className="carousel-inner  ">
                    <div className="carousel-item active ">
                        <img src="img/stuff.png" className={"d-block w-100 img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img_h}  alt="..."/>
                        
                        <div className={"div_spinner text-center d-flex justify-content-center w-100 " + styleSpn + styles.div_spiner}>
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>    
                    </div>
                    
                    <div className="carousel-item">
                        <img src="img/stuff03.jpg" className={"d-block w-100 img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img_h}  alt="..."/>

                        <div className={"div_spinner text-center d-flex justify-content-center w-100 "  + styleSpn + styles.div_spiner} >
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>  
                    </div>
                    <div className="carousel-item">
                        <img src="img/stuff04.jpg" className={"d-block w-100 img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img_h}  alt="..."/>

                        <div className={"div_spinner text-center d-flex justify-content-center w-100 " + styleSpn + styles.div_spiner} >
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>  
                    </div>

                </div>
                <button className="carousel-control-prev mx-5" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next mx-5" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>




        </React.Fragment>
     );
}
 
export default Home;