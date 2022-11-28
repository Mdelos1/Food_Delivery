import React, { useEffect, useState } from "react";
import app from "../../../firebase/firebaseConfig";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import ModaleDelete from "./ModaleDelete";
import { useNavigate } from 'react-router-dom';

const DeleteRestaurant = () => {
  const navigate = useNavigate();
  const db = getFirestore(app);
  const [lista, setLista] = useState();

  useEffect(() => {
    const getStore = async () => {
      try {
        const consulta = await getDocs(collection(db, "stores"));
        const docs = [];
        consulta.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        throw error;
      }
    };
    getStore();
  }, []);
  const [modale, setModale] = useState(false);
  const [id, setId] = useState(0);
  const modaleFuction = (id) => {
    setModale(!modale);
    setId(id);
  };
  // console.log(lista[2].name)

  return (
    <>
      <div className="DeleteRestaurant">
        <div className="DeleteRestaurant__irAtras">
          <button onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i></button>
        </div>
        <h3>¿Que restaurante deseas eliminar?</h3>
        <div>
          {lista?.map((list) => (
            <div
              key={list.id}
              className={"DeleteRestaurant__restaurant"}
              onClick={() => modaleFuction(list.id)}
            >
              <img src={list.image} />
              <p>{list.name}</p>
            </div>
          ))}
        </div>
        
        {modale && (
          <ModaleDelete modale={modale} setModale={setModale} id={id} />
        )}
      </div>
    </>
  );
};

export default DeleteRestaurant;
