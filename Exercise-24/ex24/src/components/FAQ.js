import React from "react";
import styles from "./FAQ.module.css";
const FAQ = () => {
    return ( 
        <React.Fragment>
            <div className={"container-fluid  pt-5 " + styles.div_1} >
        <p className="mt-5 fs-1 fw-bold">
            FAQ
            </p>
        <div className="border border-dark "  >
            
            <div className="accordion accordion-flush " id="accordionFlushExample">
                <div className="accordion-item border-bottom border-2">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="w-100 collapsed bg-light text-start pt-1 pb-3 ps-3 border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <span className="text-primary fs-6">01. I don't remember my password?</span>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse border-top" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nihil, minus repellendus cumque quis dolore et assumenda, sit nostrum dolorum delectus, totam culpa quasi. Nisi aliquam quia temporibus eius suscipit.    </div>
                  </div>
                </div>
                <div className="accordion-item border-bottom border-2">
                  <h2 className="accordion-header" id="flush-headingTwo">
                   
                    <button className="w-100 collapsed bg-light text-start pt-1 pb-3 ps-3 border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <span className="text-primary fs-6">02. How can I create an account at your site?</span>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse border-top" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, blanditiis numquam deserunt ex quis praesentium a maiores optio cum repudiandae ducimus porro dolorum qui asperiores repellat fuga recusandae nobis ratione!</div>
                  </div>
                </div>
                <div className="accordion-item border-bottom border-2">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="w-100 collapsed bg-light text-start pt-1 pb-3 ps-3 border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <span className="text-primary fs-6">03. What are your delivery hours?</span>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse border-top" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam animi est debitis dignissimos necessitatibus laudantium tempore illo aliquid possimus fuga ad commodi saepe iure, eum harum voluptate consectetur in!</div>
                  </div>
                </div>
                <div className="accordion-item border-bottom border-2">
                    <h2 className="accordion-header" id="flush-headingfour">
                        <button className="w-100 collapsed bg-light text-start pt-1 pb-3 ps-3 border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                        <span className="text-primary fs-6">04. How much time it takes to deliver the order ?</span>
                      </button>
                    </h2>
                    <div id="flush-collapsefour" className="accordion-collapse collapse border-top" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sunt, qui exercitationem ipsa modi eius magni ullam accusantium enim eaque debitis quo optio veritatis dolores? Neque eius aliquid consectetur provident!</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingfive">
                        <button className="w-100 collapsed bg-light text-start pt-1 pb-3 ps-3 border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                        <span className="text-primary fs-6">05. How do I know status of my order?</span>
                      </button>
                    </h2>
                    <div id="flush-collapsefive" className="accordion-collapse collapse  border-top" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam numquam quae autem quia. Corporis maxime inventore, placeat quasi nesciunt illo aut maiores rerum ipsum vitae perspiciatis quis odit animi adipisci.</div>
                    </div>
                  </div>
              </div>
        </div>
    </div>



        </React.Fragment>
     );
}
 
export default FAQ;