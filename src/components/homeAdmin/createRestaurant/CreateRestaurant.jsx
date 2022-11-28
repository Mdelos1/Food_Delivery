import React from "react";
import { useForm } from "react-hook-form";

const CreateRestaurant = ({ onSubmitRestaurant }) => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (form) => {
    onSubmitRestaurant(form);
  };

  return (
    <>
      <div className="info_createAdmin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Create Restaurant</h3>
          <div className="details_createAdmin">
            <label htmlFor="name"> Name </label>
            <input type="text" id={"name"} {...register("name")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="stars"> Stars </label>
            <input type={"text"} id={"stars"} {...register("stars")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="description"> Description </label>
            <input type="text" id="description" {...register("description")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="workTimeStart"> Work Time Start </label>
            <input
              type="text"
              id="workTimeStart"
              {...register("workTimeStart")}
            />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="workTimeFinalice"> Work Time Finalice </label>
            <input
              type="text"
              id="workTimeFinalice"
              {...register("workTimeFinalice")}
            />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="image"> Image </label>
            <input type="text" id="image" {...register("image")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="imageLogo"> Image logo </label>
            <input type="text" id="imageLogo" {...register("imageLogo")} />
          </div>
          <div className="details_createAdmin">
            <label htmlFor="beforeYou"> Before You </label>
            <input type="text" id="beforeYou" {...register("beforeYou")} />
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

export default CreateRestaurant;
