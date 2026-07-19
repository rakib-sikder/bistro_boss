import { useRef, useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../userAuthentication/AuthProvider';


const Login = () => {
  const [disable, setDisable]= useState(true)

    const {signin}=useContext(AuthContext)

    useEffect(()=>{
      loadCaptchaEnginge(6);
    },[])

    const hendelLogin= e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email,password)
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
        <div className="hero bg-neutral-50 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-16 max-w-4xl">
    <div className="text-center lg:text-left">
      <p className="text-xs tracking-[0.3em] uppercase text-[#d3502a] mb-2">Welcome back</p>
      <h1 className="text-4xl font-semibold">Login now!</h1>
      <p className="py-4 text-neutral-500 max-w-sm">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-white w-full max-w-sm shrink-0 shadow-xl rounded-2xl">
      <div className="card-body">
        <form onSubmit={hendelLogin} className="fieldset space-y-1">
          <label className="label text-xs font-medium text-neutral-500">Email</label>
          <input type="email" name='email' className="input w-full rounded-lg" placeholder="Email" />

          <label className="label text-xs font-medium text-neutral-500">Password</label>
          <input type="password" name='password' className="input w-full rounded-lg" placeholder="Password" />
          <label className="label"><LoadCanvasTemplate /></label>

          <input type="text" ref={captchaRef} name='captcha' onMouseLeave={captchaVerify} className="input w-full rounded-lg" placeholder="Type the captcha above" />
          <button disabled={disable} className="btn border-none bg-[#d3502a] hover:bg-[#b8451f] text-white rounded-full mt-4 disabled:bg-neutral-200 disabled:text-neutral-400">Login</button>
          <div><a className="link link-hover text-sm text-neutral-500">Forgot password?</a></div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;
