import React from "react";
import { useForm } from "react-hook-form";

const AditionalIngredients = ({onSubmitIngredients}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (form) => {
    onSubmitIngredients(form);
  };

  return (
    <>
      <div className="info_createAdmin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Aditional Ingredients</h3>
          <div className="details_createAdmin">
            <label htmlFor="tomate">Tomate</label>
            <input type={"checkbox"} id="tomate" {...register("tomate")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="grano">Grano</label>
            <input type={"checkbox"} id="grano" {...register("grano")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="lechuga">Lechuga</label>
            <input type={"checkbox"} id="lechuga" {...register("lechuga")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="pimiento">Pimiento</label>
            <input type={"checkbox"} id="pimiento" {...register("pimiento")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="salsa">Salsa</label>
            <input type={"checkbox"} id="salsa" {...register("salsa")} />
          </div>
          <div className="details_createAdmin">
            {/* <button className="btn_create" type={"submit"}>
              Create
            </button> */}
            <label htmlFor="create">Create</label>
            <input className="btn_create" type={"submit"} name="create" id="create" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AditionalIngredients;
