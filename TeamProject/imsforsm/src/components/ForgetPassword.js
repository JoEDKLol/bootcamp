import { Link } from 'react-router-dom';
import styles from './mycss/login.module.css'
const ForgetPassword = () => {
    return ( 
        <>
            <div id="container">
                <div className={styles.loginBox + " text-center "}>
                    <div className={styles.loginBoxTitle2 + " mt-4"}>Find password </div>
                    {/* <form className="py-2"> */}

                        <div className="form-group mb-4 mx-3 d-flex ">
                            <input type="email" className={"me-2 " + styles.loginInputBox} id="email" aria-describedby="emailHelp" placeholder=" Email"/>
                            <button className={"button " + styles.loginButton2}>Send</button>
                        </div>
                        <div className="form-group mb-4 mx-3 d-flex">
                            <input type="text" className={"me-2 " + styles.loginInputBox} id="text" aria-describedby="emailHelp" placeholder=" Enter the number received" disabled/>
                            <button className={"button " + styles.loginButton2} disabled>Confirm</button>
                        </div>
                        <div className="form-group mb-4 mx-3" >
                            <input type="password" className={"me-2 " + styles.loginInputBox} id="password" placeholder=" Password" disabled/>
                        </div>
                        <div className="form-group mb-4 mx-3" >
                            <input type="password" className={"me-2 " + styles.loginInputBox} id="re_password" placeholder=" Confirm Password" disabled/>
                        </div>
                        <div className='mx-3 mb-4'>
                            <button type="submit" className={"button " + styles.loginButton} style={{width:'100%'}} disabled>Change Password</button>
                        </div>
                        
                        <hr/>
                        <div className='mb-2'>
                        <span className={styles.loginFont}>Already have an account?</span> <Link to="/login" className=''>Login</Link>
                        </div>
                    {/* </form>                     */}
                </div>
            </div>
        </>
     );
}
 
export default ForgetPassword;