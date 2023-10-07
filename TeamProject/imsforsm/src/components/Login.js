import { Link } from 'react-router-dom';
import styles from './Login.module.css'
const Login = () => {
    return ( 
        <>
            <div id="container">
                <div className={styles.loginBox + " text-center "}>
                    <div className={styles.loginBoxTitle + " mt-4"}>Login Your Account</div>
                    <form className="py-2">
                    <div className="form-group mb-4 mx-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group mb-4 mx-3" >
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group form-check mb-4 mx-3 text-start">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        <Link to="/forgetpassword" className='ms-5'>Forgot Password</Link>
                    </div>
                    <div className='mx-3 mb-4'>
                        <button type="submit" className="btn btn-secondary " style={{width:'100%'}}>Submit</button>
                    </div>
                    
                    <hr/>
                    <div className='mb-2'>
                        Not yet account, <Link to="/signUp" className=''>Signup</Link>
                    </div>
                    </form>                    
                </div>
            </div>
        </>
     );
}
 
export default Login;