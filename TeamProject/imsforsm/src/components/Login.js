import { Link, useNavigate } from 'react-router-dom';
import styles from './mycss/login.module.css'
import { useState } from 'react';
import '../Share/Button.css'
const Login = (props) => {
    const navigate = useNavigate()
    let [loginObj, setLoginObj] = useState({email:'',password:''});
    
    if(!props.userInfo){
        return <>Loding...</> 
    }

    //console.log("loginPage::", props)

    const logInChangeHandler = (e) => {
        setLoginObj({...loginObj, [e.target.id]:e.target.value})
        //console.log(loginObj);
    }
    
    function isLogIn(elem){

    }
    
    const loginClickHandler = (e) => {
        //e.preventDefault();
        //navigate('/main');
        let findUserInfo = props.userInfo.find((elem)=>{
            //return elem.email = loginObj.email;
            if(elem.email == loginObj.email && elem.password == loginObj.password){
                return true;
            }
        });

        console.log(findUserInfo);

        // if(typeof findUserInfo !== "undefined"){
        //     sessionStorage.setItem("email", loginObj.email);
        //     sessionStorage.setItem("loginYn", "Y");
        //     navigate('/main/homepage');
        // }
        navigate('/myProfileManagement/' + findUserInfo._id);
    }

    

    return ( 
        <>
            <div id="container">
                <div className={styles.loginBox + " text-center "}>
                    <div className={styles.loginBoxTitle2 + " mt-4"}>Login Your Account</div>
                    <form className="py-2" method="get">
                        <div className="form-group mb-4 mx-3">
                            <input type="email" name="email" id="email" className={" " + styles.loginInputBox} aria-describedby="emailHelp" placeholder=" Enter email" onChange={(e) => logInChangeHandler(e)}/>
                        </div>
                        <div className="form-group mb-4 mx-3" >
                            <input type="password" name="password" id="password" className={" " + styles.loginInputBox} placeholder=" Password" onChange={(e) => logInChangeHandler(e)}/>
                        </div>
                        <div className="form-group form-check mb-4 mx-3 text-start">
                            <input type="checkbox" className={"form-check-input "+styles.loginCheck} id="exampleCheck1"/>
                            <label className={"form-check-label "+styles.loginFont} htmlFor="exampleCheck1">Remember me</label>
                            <Link to="/forgetpassword" className='ms-5'>Forgot Password</Link>
                        </div>
                    </form>     
                    <div className='mx-3 mb-4'>
                        <button type="submit" className={"button " + styles.loginButton} onClick={(e)=>loginClickHandler(e)}>Log in</button>
                    </div>
                    
                    <hr/>
                    <div className='mb-2'>
                        <span className={styles.loginFont}>Not yet account,</span>  <Link to="/signUp" className=''>Sign up</Link>
                        
                    </div>
                  
                </div>
            </div>
        </>
     );
}
 
export default Login;