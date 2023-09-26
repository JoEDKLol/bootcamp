import React from "react";
const ModalLogin = () => {
    return ( 
        <React.Fragment>
            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center fw-bold fs-1" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id="loginForm">
                        <div className="mb-4">
                            <i className="bi bi-envelope-fill"></i>
                            <input type="email" className="form-control" id="recipient-name" required/>Your email
                        </div>
                        <div className="mb-3">
                            <i className="bi bi-lock-fill"></i>
                            <input type="password" className="form-control" id="recipient-name" required/>Your password
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className="div w-100 text-center">
                            <button type="submit" className="btn btn-outline-light text-black-50" form="loginForm">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>



        </React.Fragment>
     );
}
 
export default ModalLogin;