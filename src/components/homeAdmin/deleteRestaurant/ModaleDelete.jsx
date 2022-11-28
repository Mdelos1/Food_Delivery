import React, { useEffect, useState } from 'react'
import app from '../../../firebase/firebaseConfig';
import { 
  getFirestore, 
  collection,
  getDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  setDoc,

} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



const ModaleDelete = ({modale, setModale, id}) => {
  const navigate = useNavigate();
  const db = getFirestore(app)
  const deleteRestaurant = async(id) => {
    try {
      await deleteDoc(doc(db, 'stores', id));
      navigate(-1)
    } catch (error) {
      throw(error)
    }
  }
  const cerrar = () => {
    setModale(!modale)
  }

  const [lista, setLista] = useState();

  useEffect(() => {
    const getStore = async() => {
      try {
        const consulta = await getDocs(collection(db, 'stores'))
        const docs = []
        consulta.forEach(doc => {
          docs.push({...doc.data(), id:doc.id})
        }) 
        docs.forEach(doc => {
          if(doc.id === id) {
            setLista(doc);
          }
        })
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])
  console.log(lista)
  return (
    <div className='modaleDelete'>
      <div className='modaleDelete__container'>
        <div>
          <p>¿Deseas eliminar este restaurante?</p>
        </div>
        <div className='modaleDelete__text'>
          <img className='modaleDelete__img' src={lista?.image} />
          <p>{lista?.name}</p>
        </div>
        <div>
          <button onClick={() => deleteRestaurant(id)}>Yes</button>
          <button onClick={() => cerrar()}>Cacelar</button>
        </div>
      </div>

    </div>
  )
}

export default ModaleDelete;
