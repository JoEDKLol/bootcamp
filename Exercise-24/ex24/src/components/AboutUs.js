import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return ( 
        <React.Fragment>
            
            <div className={"container-fluid  pt-5 " + styles.div_AboutUs}>
                <div className="row mt-5" ></div>
                    <div>
                    <p className="text-break">
                        Welcome to BuyBest, your number one source for all phones and gadgets.
                        <br/><br/>
                        We are dedicated to giving you the very best, with a focus on dependability, customer service and uniqueness. Founded in 2019, BuyBest has come a long way from its beginnings in a home office, toolshed, Hyderabad, TS. When Maithri R first started out, her passion was to help others by providing thee best gadgets, this drove her to do intense research, quit her day job, and gave her the impetus to tum hard work and inspiration into a booming online store. We now serve customers all over Telangana, and are thrilled to be a part of the fair trade wing of the gadgets industry.
                        <br/><br/>
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesiate to contact us.
                        <br/><br/>
                        Sincerely,<br/>
                        Chaitra R,<br/>
                        CEO
                    </p>
                </div>

            </div>
        
        </React.Fragment>
    );
}
 
export default AboutUs;