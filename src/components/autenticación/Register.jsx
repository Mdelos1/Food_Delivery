import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaRegister } from "../services/data";
import { fileUpLoad } from "../services/fileUpload";
import { useDispatch } from "react-redux";
import { actionRegisterAsync } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

const Register = () => {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  const onUpLoadImage = async (image) => {
    const url = await fileUpLoad(image);
    if (url) {
      return url;
    } else {
      console.log("Ocurrió un error al cargar la imagen");
    }
  };
  const onSubmit = async (data) => {
    const photoUrl = await onUpLoadImage(data.image[0]);
    console.log(data);
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: photoUrl,
      phoneNumber: data.phone,
    };
    dispatch(actionRegisterAsync(newUser));
  };

  return (
    <div className="details_register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="info_register">
          <input 
            name="name" 
            id="name" 
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input 
            type="text" 
            name="phone" 
            id="phone"
            placeholder="Celular"
            {...register("phone")} 
          />
          <p>{errors.phone?.message}</p>
        </div>
        <div>
          <input 
            name="password1" 
            id="password1"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input 
            name="password2" 
            id="password2"
            type="password"
            placeholder="Password"
            {...register("repeatPassword")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input 
            name="image" 
            id="image"
            type={"file"}
            placeholder="Password"
            size="sm" 
            {...register("image")}
          />
          <p>{errors.password?.message}</p>
        </div>
        

        <Link className="inicio_info" to={"/login"}>Iniciar Sesión</Link>

        <button className="btn_register" type={"submit"} >Register</button>
      </form>
    </div>
  )
}

export default Register;
