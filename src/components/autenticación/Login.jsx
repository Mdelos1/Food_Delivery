import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { schemaLogin } from "../services/data";
import { actionLoginAsync, loginProviderAsync } from "../../redux/actions/userActions";
import googleLogo from "../../assets/imgs/png/gogleLogo.png";

const Login = () => {
  const dispatch=useDispatch()
  const {register, handleSubmit, formState: { errors } } = useForm({resolver:yupResolver(schemaLogin)})
  const onSubmit = (data) => {
    dispatch(actionLoginAsync(data))
  }

  const handleLoginGoogle = () => {
    dispatch(loginProviderAsync('google'))
  }

  return (
    <div>
      <p className='title_cuenta'>Create account</p>
      <form onSubmit={handleSubmit(onSubmit)} className='input_cuenta'>
        <input placeholder='EMAIL'
          type="email"
          autoComplete="on"
          {...register("email")}
        ></input>
        <input placeholder='PASSWORD'
          type="password"
          autoComplete="on"
          {...register("password")}
        ></input>
        <img src={googleLogo} alt="Google" style={{width: 50, marginLeft: 30}} onClick={handleLoginGoogle} />
        <Link to={"/register"}>Registrarse</Link>
        
        <div className='login_pagina__btn'>
          <button className='login__btn'>Iniciar Sesión</button>
        </div>
      </form>
      <div>
        
      </div>
    </div>
  )
}

export default Login;


