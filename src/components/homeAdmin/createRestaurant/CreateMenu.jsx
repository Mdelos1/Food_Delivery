import React from "react";
import { useForm } from "react-hook-form";

const CreateMenu = ({ onSubmitMenu }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (form) => {
    onSubmitMenu(form);
  };

  return (
    <>
      <div className="info_createAdmin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Create Menus</h3>
          <div className="details_createAdmin">
            <label htmlFor="name"> name </label>
            <input type={"text"} id="name" {...register("name")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="description"> Description </label>
            <input
              type={"text"}
              id="description"
              {...register("description")}
            />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="img"> img </label>
            <input type={"text"} id="img" {...register("img")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="price"> price </label>
            <input type={"text"} id="price" {...register("price")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="time"> time </label>
            <input type={"text"} id="time" {...register("time")} />
          </div>
          <div className="details_createAdmin">
            <button className="btn_create" type={"submit"}>
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateMenu;
