import { useState } from "react";

const Login = () => {

    let [formObj, setFormObj] = useState({email:'', password:''});

    let changeHandler = (e) => {
        //console.log(e.target.value);
        setFormObj({...formObj, [e.target.name]:e.target.value});
        //console.log(formObj);
    }

    let submitClickHandler = () =>{
        console.log(formObj);
    }

    return ( 
        <>
            <div className='w-100 d-flex justify-content-center'>
                <div className="row col-4">    
                    <form id='form'>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">Email</label>
                        <input type="email"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="name" id="name" aria-describedby="helpId" placeholder=""/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="password" id="password" aria-describedby="helpId" placeholder=""/>
                        </div>
                        <button
                        onClick={submitClickHandler} 
                        className='btn btn-primary' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Login;