import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
  const [disable, setDisable]= useState(true)



    useEffect(()=>{
      loadCaptchaEnginge(6);
    },[])
   
    const hendelLogin= e=>{
        e.preventDefault()
        const form = e.target;  
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    const captchaRef = useRef(null)
    const captchaVerify=()=>{
      const value = captchaRef.current.value
      if(validateCaptcha(value)){
        setDisable(false)
      }else{
        setDisable(true)
      }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={hendelLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <label className="label"><LoadCanvasTemplate /></label>
          
          <input type="text"ref={captchaRef} name='captcha' onMouseLeave={captchaVerify} className="input" placeholder="enter captcher here..." />
          <button disabled={disable} className="btn btn-neutral mt-4">Login</button>
          <div><a className="link link-hover">Forgot password?</a></div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;