import React from "react";
import styles from './Contactus.module.css'

const Contactus = () => {
    return ( 
        <React.Fragment>

        <div className={"container-fluid  pt-5 " + styles.div_1} >
                <div className="row mt-5" >
                    <p className="fs-1 fw-bold">
                    Contact Us
                    </p>
                    <form action="" id="form">
                        <label for="name">Name:</label>
                        <input type="text" className={"form-control " + styles.inputS} id="name"  required/>
                        <label for="message">message:</label>
                        <textarea className={"form-control " + styles.textareaS} id="message" ></textarea>
                    </form>
                    <div className={"div text-end " + styles.inputS} >
                        <button type="submit" className="btn btn-secondary btn-sm mt-2" form="form">submit</button>
                    </div>
                </div>

        </div>




        </React.Fragment>     
     );
}
 
export default Contactus;