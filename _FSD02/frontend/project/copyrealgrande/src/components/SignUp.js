import { useState } from "react";

const SignUp = () => {

    let [submitObj, setSubmitObj] = useState({email:'',password:''});

    let onChangeHandler = (e) => {
        setSubmitObj({...submitObj, [e.target.name]:e.target.value});
    }

    let submitClick = (e) => {
        e.preventDefault();
        console.log(submitObj);
    }


    return ( 
        <>
        <div className="d-flex justify-content-center">
        <form className="w-50">
        <   div className="mb-3">
              <label htmlFor="name" className="form-label">name</label>
              <input type="text"
                onChange={(e)=>onChangeHandler(e)}
                className="form-control" name="name" id="name" aria-describedby="helpId" placeholder=""/>
              {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">email</label>
              <input type="email"
                onChange={(e)=>onChangeHandler(e)}
                className="form-control" name="email" id="email" aria-describedby="helpId" placeholder=""/>
              {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">password</label>
              <input type="password"
                onChange={(e)=>onChangeHandler(e)}
                className="form-control" name="password" id="password" aria-describedby="helpId" placeholder=""/>
              {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
            </div>
            <button className='btn btn-primary' onClick={(e)=>submitClick(e)}>Login</button>
        </form>
        </div>
        </>
     );
}
 
export default SignUp;