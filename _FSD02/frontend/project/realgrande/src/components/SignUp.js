import React, { useState } from "react";
const SignUp = () => {

    let [signObj,setSignObj] = useState({name:'',email:'',password:''});

    let changeHandler = (e) => {
        setSignObj({...signObj, [e.target.name]:e.target.value});
    }
    let submitClickHandler = (e) =>{
        e.preventDefault();
        console.log(signObj);
    }

    return ( 
        <React.Fragment> 
            {/* justify-content-center */}
            <div className='w-100 d-flex justify-content-center'>
                <div className="row col-4">    
                    <form>
                        <div className="mb-3">
                        <label htmlFor="name"  className="form-label">Name</label>
                        <input type="text"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="name" id="name" aria-describedby="helpId" placeholder=""/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="email" id='label2' className="form-label">email</label>
                        <input type="email"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="email" id="email" aria-describedby="helpId" placeholder=""/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="password" id='label3' className="form-label">password</label>
                        <input type="password"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="password" id="password" aria-describedby="helpId" placeholder=""/>
                        </div>
                        <button 
                            onClick={(e)=>submitClickHandler(e)} 
                        id='btnSignUp' type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </React.Fragment>
     );
}
 
export default SignUp;