import { Link } from 'react-router-dom';
import styles from './mycss/login.module.css'
import { useState } from 'react';
const SignUp = () => {
    let [userObj, setUserObj] = useState({name:'', email:'', password:'', repassword:''});

    
    const signUpChangeHandler = (e) => {
        setUserObj({...userObj, [e.target.id]:e.target.value})
        console.log(userObj);

    }

    const signUpClickHandler = (e) => {
        e.preventDefault()
        console.log(userObj.password);
        console.log(userObj.repassword);
    }



    return ( 
        <>
            <div id="container">
                <div className={styles.loginBox + " text-center "}>
                    <div className={styles.loginBoxTitle2 + " mt-4"}>Sign Up</div>
                    <form className="py-2">
                        <div className="form-group mb-4 mx-3">
                            <input type="name" className={" " + styles.loginInputBox} id="name" aria-describedby="emailHelp" placeholder=" Name" onChange={(e)=>signUpChangeHandler(e)}/>
                        </div>
                        <div className="form-group mb-4 mx-3">
                            <input type="email" className={" " + styles.loginInputBox} id="email" aria-describedby="emailHelp" placeholder=" Email" onChange={(e)=>signUpChangeHandler(e)}/>
                        </div>
                        <div className="form-group mb-4 mx-3" >
                            <input type="password" className={" " + styles.loginInputBox} id="password" placeholder=" Password" onChange={(e)=>signUpChangeHandler(e)}/>
                        </div>
                        <div className="form-group mb-4 mx-3" >
                            <input type="password" className={" " + styles.loginInputBox} id="repassword" placeholder=" Confirm Password" onChange={(e)=>signUpChangeHandler(e)}/>
                        </div>
                        <div className='mx-3 mb-4'>
                            <button type="submit" className={"button " + styles.loginButton} style={{width:'60%'}} onClick={(e)=>signUpClickHandler(e)}>Register Now</button>
                        </div>
                        
                        <hr/>
                        <div className='mb-2'>
                        <span className={styles.loginFont}>Already have an account?</span> <Link to="/login" className=''>Login</Link>
                        </div>
                    </form>                    
                </div>
            </div>
        </>
     );
}
 
export default SignUp;