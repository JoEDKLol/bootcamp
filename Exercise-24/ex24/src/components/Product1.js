import styles from './Product1.module.css'

import React, {useEffect, useState} from "react";

const Product1 = () => {

    let [styleCar, setStyleCar] = useState(" visually-hidden ");
    let [styleSpn, setStyleSpn] = useState(" ");

    useEffect(() => {
        setStyleCar(" ")
        setStyleSpn(" visually-hidden ");
        console.log("useEffect!!");
    });


    return ( 
        <React.Fragment>
            <div className={"container-fluid  pt-5 " + styles.div_pro}>
                <div className="row mt-5 mb-5" >
                    <div className="col-md-4 col-sm-6 text-center" >
                        <figure className="figure">
                            <img src="img/airpot.jpg" className={" figure-img img-fluid img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img} alt=""
                           />
                            <figcaption className="figure-caption">Img 1</figcaption>
                        </figure>
                        <div className={"div_spinner text-center d-flex justify-content-center w-100 " + styleSpn + styles.div_spinner} >
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 col-sm-6  text-center">
                        <figure className="figure">
                            <img src="img/Controllers.jpg" className={" figure-img img-fluid img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img} alt=""
                            />
                            <figcaption className="figure-caption">Img 2</figcaption>
                        </figure>    
                        <div className={"div_spinner text-center d-flex justify-content-center w-100 " + styleSpn + styles.div_spinner} >
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6  text-center">
                        <figure className="figure">
                            <img src="img/headset.jpg" className={" figure-img img-fluid img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img} alt=""
                            />
                            <figcaption className="figure-caption">Img 3</figcaption>
                        </figure>    
                        <div className={"div_spinner text-center d-flex justify-content-center w-100 " + styleSpn + styles.div_spinner} >
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6  text-center" >
                        <figure className="figure">
                            <img src="img/phone.png" className={" figure-img img-fluid img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar  + styles.img} alt=""
                            />
                            <figcaption className="figure-caption">Img 4</figcaption>
                        </figure>    
                        <div className={"div_spinner text-center d-flex justify-content-center w-100 " + styleSpn+ styles.div_spinner} >
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6  text-center">
                        <figure className="figure">
                            <img src="img/smarwatch.png" className={" figure-img img-fluid img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img} alt="" 
                            />
                            <figcaption className="figure-caption">Img 5</figcaption>
                        </figure>    
                        <div className={"div_spinner text-center d-flex justify-content-center w-100  " + styleSpn + styles.div_spinner} >
                            <div className="spinner-border align-self-center" role="status">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6  text-center">
                        <figure className="figure">
                            <img src="img/switch.jpg" className={" figure-img img-fluid img-thumbnail rounded-3 border border-2 border-dark object-fit-cover " + styleCar + styles.img} alt=""
                            />
                            <figcaption className="figure-caption">Img 6</figcaption>
                        </figure>
                        <div className={"div_spinner text-center d-flex justify-content-center w-100 " + styleSpn + styles.div_spinner}>
                            <div className="spinner-border align-self-center" role="status">
 
                            </div>
                        </div>
                    </div>

                    
                </div>

            </div>




        </React.Fragment>
     );
}
 
export default Product1;